import React from 'react'
import { useLocation } from 'react-router-dom'

const CustDetails = () => {
  const location = useLocation()
  const customer = location.state?.item

  if(!customer){
    return(
      <span>No Customer Founded</span>
    )
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Customer Details</h1>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Customer ID:</td>
            <td className="border px-4 py-2">{customer.customer_id}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Name:</td>
            <td className="border px-4 py-2">{customer.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Email:</td>
            <td className="border px-4 py-2">{customer.email}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Phone:</td>
            <td className="border px-4 py-2">{customer.phone}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Address:</td>
            <td className="border px-4 py-2">{customer.address}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Registration Date:</td>
            <td className="border px-4 py-2">
              {new Date(customer.registration_date).toLocaleDateString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustDetails