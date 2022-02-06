// import table data
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // clear any existing data
    tbody.html("");

    //loop through each object in data
    //append a row & cells for each value in row
    data.forEach((dataRow) => {
        //append row to table body
        let row = tbody.append("tr");

        //loop through each field in dataRow
        //add each value as a cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick(){
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check if a date was entered and filter using date
    if (date) {
        //keep only toes where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data
    //if no date was entered, original data will be visible
    buildTable(filteredData);
}

// attach an event to listen for form button
d3.selectAll("#filter-btn").on("click",handleClick);
// build table when page loads
buildTable(tableData);