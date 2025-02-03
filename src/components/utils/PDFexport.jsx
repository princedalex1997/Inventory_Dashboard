import jsPDF from "jspdf";
import "jspdf-autotable";

const useExportPDF = () => {
  const exportToPDF = (data, columns, fileName) => {
    const doc = new jsPDF();

    // Map the data to rows
    const rows = data.map((item) =>
      columns.map((column) => item[column.key] || "")
    );

    // Add the table to the PDF
    doc.autoTable({
      head: [columns.map((col) => col.title)],
      body: rows,
    });

    // Save the PDF
    doc.save(`${fileName || "Export"}.pdf`);
  };

  return { exportToPDF };
};

export default useExportPDF;
