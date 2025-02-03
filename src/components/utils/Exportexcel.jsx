import * as XLSX from "xlsx";

export const exportToExcel = (data, fileName, sheetName) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName || "Sheet1");
  XLSX.writeFile(workbook, `${fileName || "Export"}.xlsx`);
};


