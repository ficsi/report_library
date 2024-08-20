// Simulated response for reports list
export const fetchReports = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				"Sales Report",
				"Customer Details",
				"Inventory Summary",
				"Financial Overview",
				"Employee Performance",
			]);
		}, 1000);
	});
};

// Simulated response for export formats
export const fetchExportFormats = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				"PDF",
				"DOCX",
				"XLSX",
				"HTML",
				"PPTX",
			]);
		}, 1000);
	});
};

// Simulated response for HTML report preview
export const fetchReportPreview = async (reportName) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`
        <div>
          <h1>${reportName}</h1>
          <p>Report generated on: ${new Date().toISOString().split('T')[0]}</p>
          <table>
            <thead>
              <tr><th>Product</th><th>Sales</th></tr>
            </thead>
            <tbody>
              <tr><td>Product A</td><td>$5000</td></tr>
              <tr><td>Product B</td><td>$3000</td></tr>
            </tbody>
          </table>
        </div>
      `);
		}, 1000); // Simulating a 1-second delay
	});
};

// Simulated response for report download (in this case, just a PDF file)
export const downloadReport = async (reportName, format) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Fake binary data for ${reportName}.${format}`);
		}, 1000); // Simulating a 1-second delay
	});
};