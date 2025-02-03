import React from "react";
import { popularProducts, recentOrderData } from "./Images/link";
import { Link } from "react-router-dom";
import { getOrderStatus } from "./OrderStatus";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TableView = () => {
  const exportExcel = () => {
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
    const worksheet = XLSX.utils.json_to_sheet(dataOrder);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "Recent Orders list.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "ID",
      "Product ID",
      "Customer ID",
      "Name",
      "Date",
      "Total",
      "Order Status",
      "Address",
    ];
    const tableRows = recentOrderData.map((item) => [
      item.id,
      item.product_id,
      item.customer_id,
      item.customer_name,
      new Date(item.order_date).toLocaleDateString(),
      item.order_total,
      item.current_order_status,
      item.shipment_address,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });
    doc.save("Recent Orders.pdf");
  };

  return (
    <div className="flex flex-row gap-3 mb-10">
      <div
        className=" pt-5 ml-8 h-full  flex flex-col gap-3 pb-5
        w-[830px] rounded-md shadow-md "
      >
        <div className="flex flex-row justify-between items-center h-3">
          <strong className="pl-3">Recent Orders</strong>
          <div className="mr-2">
            <button
              onClick={exportExcel}
              className="h-[40px] mx-2 bg-orange-600 p-2 text-slate-50 rounded-md"
            >
              Excel
            </button>
            <button
              onClick={exportToPDF}
              className="h-[40px] mx-2 bg-red-600 p-2 text-slate-50 rounded-md"
            >
              PDF
            </button>
          </div>
        </div>
        <div className="mt-3 max-h-[240px] overflow-x-hidden overflow-y-auto   ">
          <table className="w-full ">
            <thead className="bg-slate-400 text-white font-bold">
              <tr className="uppercase w-full  ">
                <td>ID</td>
                <td>PRD :Id</td>
                <td>CUST:ID </td>
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
                    <Link className="hover:underline" to="products">
                      {item.product_id}
                    </Link>
                  </td>
                  <td>{item.customer_id}</td>

                  <td>
                    <Link className="hover:font-bold" to="products">
                      {item.customer_name}
                    </Link>
                  </td>
                  <td>{new Date(item.order_date).toLocaleDateString()} </td>
                  <td>{item.order_total} </td>
                  <td> {getOrderStatus(item.current_order_status)} </td>
                  <td>{item.shipment_address} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popular Products */}

      <div className=" w-[300px] flex flex-col  justify-start p-3  border rounded-md shadow-md  max-h-[296px]">
        <strong>Popular Products</strong>
        <div className="overflow-x-hidden overflow-y-auto ">
          {popularProducts.map((item) => (
            <div className="flex flex-row border rounded-md shadow-md mb-5 items-center p-2 mt-1 duration-200 transition ease-in-out hover:bg-slate-400 hover:text-fuchsia-50 hover:-translate-y-1 hover:scale-100">
              <div className="w-10 h-10 min-w-10 rounded-sm overflow-hidden items-center pt-1">
                <img src={item.product_thumbnail} alt={item.product_name} />
              </div>
              <div className="ml-4 flex-1">
                <div className="text-xs w-full">{item.product_name} </div>
                <div className="text-sm font-medium">{item.product_stock}</div>
              </div>
              <div className="text-xs">{item.product_price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableView;
