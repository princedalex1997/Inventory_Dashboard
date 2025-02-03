import React from 'react'
import { useLocation } from 'react-router-dom'

const PrdDetails = () => {
    const location  = useLocation()
    const prInfo = location.state?.item

    if(!prInfo){
        return(
            <span>No List Founded</span>
        )
    }
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Prodct Details</h1>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Product ID:</td>
            <td className="border px-4 py-2">{prInfo.id}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Name:</td>
            <td className="border px-4 py-2">{prInfo.product_name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Price:</td>
            <td className="border px-4 py-2">{prInfo.product_price}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold"> Available Stock:</td>
            <td className="border px-4 py-2">{prInfo.product_stock}</td>
          </tr>
         

        </tbody>
      </table>
    </div>
  )
}

export default PrdDetails