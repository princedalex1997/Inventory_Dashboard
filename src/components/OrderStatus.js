export function getOrderStatus(status) {
  switch (status) {
    case "PLACED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-md text-sky-600 bg-sky-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "CONFIRMED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "SHIPPED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "OUT_FOR_DELIVERY":
      return (
        <span className="capitalize py-1 p-1 rounded-md text-xs text-yellow-600 bg-yellow-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "DELIVERED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}
export function getStockStatus(status) {
  if (status > 0) {
    return (
      <span className="capitalize py-1 px-2 rounded-md text-md">{status}</span>
    );
  } else {
    return (
      <h1 className="py-1 px-2 rounded-md text-lg text-orange-600 font-bold ">
        {status}
      </h1>
    );
  }
}
