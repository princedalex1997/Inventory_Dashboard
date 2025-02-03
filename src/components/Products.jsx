import React from "react";
import { productsList } from "./Images/link";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { getStockStatus } from "./OrderStatus";
import { Link } from "react-router-dom";

const Products = () => {
  const totalPrice = productsList.reduce((total, pr) => {
    return total + parseFloat(pr.product_price.replace("$", ""));
  }, 0);

  const exportExcel = () => {
    const dataProductList = productsList.map((item) => ({
      ID: item.id,
      "Product Name": item.product_name,
      Price: item.product_price,
      "Available Stock": item.product_stock,
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataProductList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(
      workbook,
      `Product List ${new Date().toLocaleDateString("en-GB")}`
    );
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    const tableColumn = [
      ["S.No", "ID", "PRODUCT NAME", "PRICE", "AVAILABLE STOCK"],
    ];
    const tableRow = productsList.map((item, index) => [
      index + 1,
      item.id,
      item.product_name,
      item.product_price,
      item.product_stock,
    ]);
    doc.setFontSize(14); // Set font size for the text
    // doc.text(`Total No. Product : ${productsList.length}`, 10, 10);
    doc.text(`Total Amount of all Product : $${totalPrice.toFixed()}`, 10, 10);
    doc.text(` ${new Date().toLocaleDateString()}`, 150, 10);
    doc.autoTable({
      head: tableColumn,
      body: tableRow, // Corrected from "boday" to "body"
      startX: 35,
      styles: {
        halign: "center", // Horizontal alignment for table content
      },
      headStyles: {
        halign: "center", // Horizontal alignment for table headers
      },
    });

    // Format the date as DD/MM
    const formattedDate = new Date().toLocaleDateString("en-GB").slice(0, 5);
    doc.save(`Product List ${formattedDate}.pdf`); // Save with formatted date
  };

  return (
    <div>
      <div className="flex flex-row justify-between top-0 sticky bg-slate-600 h-10 items-center text-white p-2  ">
        <strong>Product List</strong>
        <div className="mr-5 justify-around">
          <strong className="mr-4 cursor-pointer " onClick={exportExcel}>
            Excel
          </strong>
          <strong className="cursor-pointer " onClick={exportPDF}>
            PDF
          </strong>
        </div>
      </div>
      <div className=" overflow-y-auto	overflow-x-hidden max-h-[480px] border mt-4 mb-4">
        <table className="w-full border-collapse border-spacing-2 border border-slate-500 dark:bg-slate-700">
          <thead className="top-0 sticky">
            <tr>
              <td className="border border-slate-600 text-center dark:bg-slate-800">S.No</td>
              <td className="border border-slate-600 text-center dark:bg-slate-800">Name</td>
              <td className="border border-slate-600 text-center dark:bg-slate-800">
                Product ID
              </td>
              <td className="border border-slate-600 text-center dark:bg-slate-800">Price</td>
              <td className="border border-slate-600 text-center dark:bg-slate-800">
                Avl: Stock
              </td>
            </tr>
          </thead>
          <tbody>
            {productsList.map((item, index) => (
              <tr
                key={index}
                className="duration-200 transition ease-in-out hover:text-slate-800 hover:-translate-y-1 hover:scale-105 hover:rounded-lg hover:bg-slate-300"
              >
                <td className="border border-slate-600 text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-600 text-center">
                  <Link to={`/productDetails/${item.id}`} state={{item}} >
                  {item.product_name}
                  </Link>
                </td>
                <td className="border border-slate-600 text-center">
                  {item.id}
                </td>
                <td className="border border-slate-600 text-center">
                  {item.product_price}
                </td>
                <td className="border border-slate-600 text-center">
                  {getStockStatus(item.product_stock)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col pt-3 gap-4  ">
        <span className="rounded-md w-[250px] h-9 p-2">
          Total No.Products : {productsList.length}
        </span>
        <span className="rounded-md  h-9 p-2 flex flex-row">
          Total Cost of the Products :
          <p className="text-red-600 font-bold ml-2">${totalPrice.toFixed(2)}</p>
        </span>
      </div>
    </div>
  );
};

export default Products;
