const exportButton = document.querySelector(".export-btn");

const exportHTMLTableToCSV = (selector) => {
  // parse table for data
  const table = document.querySelector(selector);
  const rows = Array.from(table.rows);
  const teamMembers = rows.map((row) =>
    Array.from(row.cells).map(
      // if cell have multiple values use pipe symbol
      (cell) => cell.innerText.replace(/\n/g, "|")
    )
  );

  // construct CSV
  const csvContent =
    "data:text/csv;charset=utf-8," +
    teamMembers
      .map((teamMember) => Object.values(teamMember).join(","))
      .join("\n");

  // name file and download
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "team-members.csv");
  document.body.appendChild(link);
  link.click();
};

exportButton.addEventListener("click", function () {
  exportHTMLTableToCSV(".table-widget > table");
});
