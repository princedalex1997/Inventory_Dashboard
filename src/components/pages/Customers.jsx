import React from "react";
import { customersList } from "../Images/link";
import { exportToExcel } from "../utils/Exportexcel";
import useExportPDF from "../utils/PDFexport";
import { Link  } from "react-router-dom";

const Customer = () => {
  const { exportToPDF } = useExportPDF();

  const handle_excel_export = () => {
    const dataExcel = customersList.map((item) => ({
      ID: item.customer_id,
      Name: item.name,
      Email: item.email,
      "Phone No:": item.phone,
      Adress: item.address,
      "  Register Date": item.registration_date,
    }));
    exportToExcel(
      dataExcel,
      `Customer List ${new Date().toLocaleDateString()}`
    );
    alert("Excel File Downloaded .");
  };

  const handle_export_PDF = () => {
    const customerData = customersList.map((item, index) => ({
      "S.No :": index + 1,
      ...item,
      // registration_date:new Date(item.registration_date).toLocaleDateString
    }));

    const customer_Header = [
      { title: "S.No", key: "S.No :" },
      { title: "ID", key: "customer_id" },
      { title: "Name", key: "name" },
      { title: "Email", key: "email" },
      { title: "Phone No.", key: "phone" },
      { title: "Address", key: "address" },
      { title: "Register Date", key: "registration_date" },
    ];
    exportToPDF(
      customerData,
      customer_Header,
      ` Customer List  ${new Date().toLocaleDateString()} `
    );
  };


  return (
    <div
      className=" pt-5 ml-8 h-auto  flex flex-col gap-3 pb-5
    mx-10 rounded-md shadow-md "
    >
      <div className="flex flex-row justify-between items-center h-3">
        <strong className="pl-3">Customer List</strong>
        <div className="mr-2">
          <button
            onClick={handle_excel_export}
            className="h-[40px] mx-2 bg-orange-600 p-2 text-slate-50 rounded-md"
          >
            Excel
          </button>
          <button
            onClick={handle_export_PDF}
            className="h-[40px] mx-2 bg-red-600 p-2 text-slate-50 rounded-md"
          >
            PDF
          </button>
        </div>
      </div>
      <div className="mt-3 overflow-y-auto overflow-x-hidden max-h-[580px] ">
        <table className="w-full">
          <thead className="top-0 sticky">
            <tr className="uppercase w-full dark:bg-slate-800">
              <td className="" >S.No:</td>
              <td>Customer-Id</td>
              <td>Name </td>
              <td>Email </td>
              <td>Phone </td>
              <td>Adress </td>
              <td>Registration Date </td>
            </tr>
          </thead>
          <tbody>
            {customersList.map((item, index) => (
              <tr
                key={index.key}
                className="duration-200 transition ease-in-out hover:bg-slate-400 hover:text-fuchsia-50 hover:-translate-y-1 hover:scale-105 hover:rounded-lg"
              >
                <td>{index + 1} </td>
                <td>
                <Link to={`/customerDetails/${item.customer_id}`} state={{ item }}>

                    {item.customer_id}
                  </Link>
                </td>
                <td>{item.name} </td>
                <td>{item.email} </td>
                <td>{item.phone} </td>
                <td>{item.address} </td>
                <td>
                  {new Date(item.registration_date).toLocaleDateString()}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
