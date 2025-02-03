import React from "react";
import { recentOrderData } from "../Images/link";
import { getOrderStatus } from "../OrderStatus";
import { Link } from "react-router-dom";
import { exportToExcel } from "../utils/Exportexcel";
import useExportPDF from "../utils/PDFexport";

const Order = () => {
  const { exportToPDF } = useExportPDF();

  const handleExportPDF = () => {
    const columns = [
      { title: "ID", key: "id" },
      { title: "Product ID", key: "product_id" },
      { title: "Customer ID", key: "customer_id" },
      { title: "Name", key: "customer_name" },
      { title: "Date", key: "order_date" },
      { title: "Total", key: "order_total" },
      { title: "Order Status", key: "current_order_status" },
      { title: "Address", key: "shipment_address" },
    ];

    const data = recentOrderData.map((item) => ({
      ...item,
      order_date: new Date(item.order_date).toLocaleDateString(),
    }));

    exportToPDF(data, columns, "Recent Orders");
  };

  const handleExport = () => {
    const dataOrder = recentOrderData.map((item) => ({
      ID: item.id,
      "Product ID": item.product_id,
      "Customer ID": item.customer_id,
      Name: item.customer_name,
      Date: new Date(item.order_date).toLocaleDateString(),
      Total: item.order_total,
      "Order Status": item.current_order_status,
      Address: item.shipment_address,
    }));

    exportToExcel(dataOrder, "Recent Orders List", "Orders");
  };

  const totalOrderPrice = recentOrderData.reduce((total ,order)=>{
    return total + parseFloat(order.order_total.replace("$",""))
  } ,0)

  return (
    <div
      className=" pt-5 ml-8 h-auto  flex flex-col gap-3 pb-5
    mx-10 rounded-md shadow-md "
    >
      <div className="flex flex-row justify-between items-center h-3">
        <strong className="pl-3">Recent Orders List</strong>
        <div className="mr-2">
          <button
            onClick={handleExport}
            className="h-[40px] mx-2 bg-orange-600 p-2 text-slate-50 rounded-md"
          >
            Excel
          </button>
          <button
            onClick={handleExportPDF}
            className="h-[40px] mx-2 bg-red-600 p-2 text-slate-50 rounded-md"
          >
            PDF
          </button>
        </div>
      </div>
      <div className="mt-3">
        <table className="w-full">
          <thead>
            <tr className="uppercase w-full dark:bg-slate-800">
              <td>ID</td>
              <td>Product-Id</td>
              <td>Customer-ID </td>
              <td>Name </td>
              <td>Date </td>
              <td>Total </td>
              <td>Order Status </td>
              <td>ADRESS </td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((item) => (
              <tr
                key={item.key}
                className="duration-200 transition ease-in-out hover:bg-slate-400 hover:text-fuchsia-50 hover:-translate-y-1 hover:scale-105 hover:rounded-lg"
              >
                <td>{item.id} </td>
                <td>
                  <Link className="hover:underline">{item.product_id}</Link>
                </td>
                <td>{item.customer_id}</td>
                <td>{item.customer_name} </td>
                <td>{new Date(item.order_date).toLocaleDateString()} </td>
                <td>{item.order_total} </td>
                <td> {getOrderStatus(item.current_order_status)} </td>
                <td>{item.shipment_address} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4 ml-4" >
        <span>Total No. Order's : {recentOrderData.length} </span>
        <span>Total Cost : {totalOrderPrice.toFixed(2)} </span>
      </div>
    </div>
  );
};

export default Order;
