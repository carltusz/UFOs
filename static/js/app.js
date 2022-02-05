// import table data
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

//function double addition
function doubleAddition(c,d){
    var total = addition(c,d)*2;
    return total;
}

console.log(doubleAddition(65,34));

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