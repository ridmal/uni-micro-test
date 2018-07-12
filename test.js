function addTable(){
    // Heders 
    var months = ["January", "February", "March"];
    // var months = ["January", "February", "March","April","May","June","July","Auguest","September","Octomber","November","December"];

    //Data 
    var data = [["Name1","12","14","20","46"],["Name2","2","4","6","12"],["Name3","3","10","7","20"]]

    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute("class", "externalTable");
    tbl.style.width = '100%';
    // tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < data.length+1; i++) {
        var tr = document.createElement('tr');
            if(i==0){
                var td = document.createElement('th');
                td.appendChild(document.createTextNode(" "))
                tr.appendChild(td)
                for(var k = 0 ; k < months.length;k++)
                    {
                        var td = document.createElement('th');
                        td.appendChild(document.createTextNode(months[k]))
                        tr.appendChild(td)
                    }
                    var td = document.createElement('th');
                    td.appendChild(document.createTextNode("Sum"))
                    tr.appendChild(td)
                    
            }
            else{
                console.log(data[i-1]);
                for(var k=0;k<data[i-1].length;k++){
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(data[i-1][k]))
                    tr.appendChild(td)
                }
            }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

window.onload=addTable;
