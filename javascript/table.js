function adduser(){
    
    var data =  document.getElementById("data");
    var row =  document.createElement("tr");
    var col1 =  document.createElement("td");
    var col1Value = 7;
    var textnode1 = document.createTextNode(col1Value);
    col1.appendChild(textnode1);
    row.append(col1);
    var col2 =  document.createElement("td");
    var col2Value = document.getElementById("firstname").value;
    var textnode2 = document.createTextNode(col2Value);
    col2.appendChild(textnode2);
    row.append(col2);
    var col3 =  document.createElement("td");
    var col4 =  document.createElement("td");
    var col5 =  document.createElement("td");
    
    row.append(col3);
    row.append(col4);
    row.append(col5);
    
    document.getElementById("data").appendChild(row);
   // var rdata = document.getElementById("rdata");
   // var cell1 = document.createElement("td");
    //var cell2 = document.createElement("td");


   


    //var table = document.getElementById("table").getElementsByTagName("tbody");
    //var Row = table.insertRow(tableRef.rows.length);
   // var newCell  = Row.insertRow(0);
    //var newText  = document.createTextNode('New row');
   //table.append(row);
}
