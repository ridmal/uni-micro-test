var heads = [" ","January", "February", "March","April","May","June","July","Auguest","September","Octomber","November","December","Sum"];
// var months = ["January", "February", "March","April","May","June","July","Auguest","September","Octomber","November","December"];

//  Data Array structure 
//  [
//      upperBoundData- Array,
//      UpperBoundSum - Array, 
//      lowerBoundData - Array,
//      lowerBoundSum - Array,
//      DifferenceBetweenSumations - Array 
//
//      upperBoundData 
//      first layer - > [[1],[2],[3]]
//      second layer [1] -> [[1.1],[1.2],[1.3]]
//      third layer [1.1] -> [[1.1.1],[1.1.2],[1.1.3]]
//      [
//          [   [1],
//              [ [1.1],
//                [1.1.1],
//                [1.1.2],
//                [1.1.3]
//              ],
//              [1.2]
//          ]
//          [   [2],
//              [ [2.1],
//                [2.1.1],
//                [2.1.2]
//              ],
//              [2.2],
//              [2.3]
//          ]
//      ]
//  each data element can be 3 value array ["Actual value","Expected Value","Profit"]

var datanew = [
    // upperBoundData
    [
    
        [ 
            ["Name1",["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]],
            [
                ["Name67",["12","12 000","-12.5"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]], // 2nd layer
                ["Name10",["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]], // 3rd layer 
                ["Name120","12","14","20","46"]
            ],
            ["Name6","12","14","20","46"]
        ] , 
        [
            ["Name2",["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]],
            ["Name7","12","14","20","46"],
            [
                ["Name30",["12","12 000","-12.5"],"14","20","46"], // 2nd layer
                ["Name40","12","14","20","46"], // 3rd layer 
                ["Name50","12","14","20","46"]
            ]
        ]
        ],
        // Upper bound Sum
    [
        "Sumation","12","14","20","46"
    ],
    // lowerBoundData
  [
    
        [ 
            ["Name1",["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]], 
            [
                ["Name67",["12","12 000","-12.5"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]], // 2nd layer
                ["Name10",["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]], // 3rd layer 
                ["Name120","12","14","20","46"]
            ],
            ["Name6","12","14","20","46"]
        ] , 
        [
            ["Name2",["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"],["194 000","180 000","+18%"]],
            ["Name7","12","14","20","46"],
            [
                ["Name30",["12","12 000","-12.5"],"14","20","46"], // 2nd layer
                ["Name40","12","14","20","46"], // 3rd layer 
                ["Name50","12","14","20","46"]
            ]
        ]
        ],
    // lowerBoundSum
    [],
    // DifferenceBetweenSumations
    []
    ]

function UserAction() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
                addTable()
           }
        };
        xhttp.send();
        var json = '{"result":true, "count":42}';
// obj = JSON.parse(json);

// console.log(obj.count);
    }
    

var styles = {
    "1stLayerPaddingLeftWithButton": "10px",
    "2ndLayerPaddingLeftWithoutButton" : "50px",
    "2ndLayerPaddingLeftWithButton": "30px",
    "3rdLayerPaddingLeft" : "50px",
    "backgroundColorForPassedMonths" : "#e2f2f3",
    "downButtonIcon":"<i class='glyphicon glyphicon-menu-down' style='font-size:10px;'></i>",
    "downButtonColor":"black",
    "upButtonIcon":"<i class='glyphicon glyphicon-menu-up' style='font-size:10px;'></i>",
    "upButtonColor": "black",
    "ButtonMarginRight":"10px",
    "1stLayerFirstColoumnTextColor":"#80c5c8"
}

function includeCSSfile(href) {
    var head_node = document.getElementsByTagName('head')[0];
    var link_tag = document.createElement('link');
    link_tag.setAttribute('rel', 'stylesheet');
    link_tag.setAttribute('href', href);
    head_node.appendChild(link_tag);
}

function addTable(){

    // get parameter from the client side.
    // var name = document.getElementById("uni-micro").getAttribute("widget");
    // console.log(name);

    //UserAction();

    includeCSSfile('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    //includeCSSfile('https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css');
    // Add table directly to the body element.
    // var body = document.getElementsByTagName('body')[0];
    // Add table to the specific div tag
    var div = document.getElementById("addTable");
    var tbl = document.createElement('table');
    tbl.setAttribute("class", "externalTable");
    tbl.setAttribute("id", "externalTable");
    tbl.style.width = '100%';
    // tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');

    // Adding header feilds into the table
    var tr = document.createElement('tr');
    for(var k = 0 ; k < heads.length;k++)
            {
                var td = document.createElement('th');
                td.appendChild(document.createTextNode(heads[k]))
                tr.appendChild(td)
                tbdy.appendChild(tr);
               
            }   
     // Adding data feilds to the table          
    for(var m = 0 ; m< datanew.length;m++){ 
        if(m==0||m==2){ // Data feilds which have child data ( drop down data ) 
    for (var i = 0; i < datanew[m].length; i++) {
        var tr = document.createElement('tr');
        var rowID = "r"+m+i;
                    // Start to fetch the data from the data Array
                    // loop data array elements inside the each main data set ( i-1 -> data array position, i-> row index )
                    for(var a = 0;a<datanew[m][i].length;a++){

                        var tr = document.createElement('tr');
                        // parent rows and first child rows have ids start with r 
                        var rowID = "r"+m+i;
                        //console.log(rowID);
                        tr.setAttribute("class", rowID);

                        // loop the element in each data array
                        for(var k=0;k<datanew[m][i][a].length;k++){
                            
                            var td = document.createElement('td');  
                            
                            // Add buttons to 1st coloumn in 1st layer which will help to show/hide 2nd layer of data
                            // Add the button if main data set element has more than one arrys to first element of the each array  
                            if(Array.isArray(datanew[m][i]) && datanew[m][i].length > 1 && k==0 && a==0){

                                 // Add padding to first coloum with button in 1nd layer.
                                td.style.paddingLeft = styles["1stLayerPaddingLeftWithButton"];

                                td.style.color = styles["1stLayerFirstColoumnTextColor"]
                                // Add down button 
                                var downButton = document.createElement('a');
                                downButton.innerHTML = styles.downButtonIcon;
                                downButton.setAttribute("id", "db"+m+i);
                                downButton.style.display = ''
                                downButton.style.color = styles.downButtonColor
                                downButton.style.marginRight = styles.ButtonMarginRight
                                downButton.onclick = function(){ 
                                    //console.log(this.id);
                                    var index = this.id.split("db")[1]; 
                                    //console.log(index);
                                    var rows = document.getElementsByClassName("r"+index);
                                    // wait(500);
                                    for (var b = 1; b < rows.length; b++){                                         
                                        rows[b].style.display = ''
                                            
                                    }
                                    // row.style.display=''
                                    var button = document.getElementById("ub"+index);
                                    button.style.display = ''
                                    this.style.display = 'none'
                                };
                                td.appendChild(downButton)
        
                                // Add up button 
                                var upButton = document.createElement('a');
                                upButton.innerHTML = styles.upButtonIcon;
                                upButton.setAttribute("id", "ub"+m+i);
                                upButton.style.display = 'none'
                                upButton.style.color = styles.upButtonColor
                                upButton.style.marginRight = styles.ButtonMarginRight
                                upButton.onclick = function(){ 
                                    var index = this.id.split("ub")[1]; 
                                    var firstChildRows = document.getElementsByClassName("r"+index);
                                    for (var b = 1; b < firstChildRows.length; b++){
                                        firstChildRows[b].style.display = 'none';
                                        
                                    }

                                    // when user click parent up button all the child nodes rows need to be
                                    var secondChildRows = document.getElementsByClassName("cr"+index);
                                    for (var b = 0; b < secondChildRows.length; b++){
                                        secondChildRows[b].style.display = 'none';
                                        
                                    }

                                    var button = document.getElementById("cdb"+index);   
                                    button.style.display = ''
                                    var button = document.getElementById("cub"+index); 
                                    button.style.display = 'none'  

                                    // row.style.display='none'
                                    var button = document.getElementById("db"+index);   
                                    button.style.display = ''
                                    this.style.display = 'none'

                                     
                    
                                };
                                td.appendChild(upButton)
                            }

                            // Adding 3rd layer of nodes ( if exsists )
                            else if(a>0 && Array.isArray(datanew[m][i][a][0]) && datanew[m][i][a].length>1){
                                for(var c = 0; c<datanew[m][i][a].length;c++){
                                            var tr = document.createElement('tr');
                                            
                                            if(c>0) // put id starts with cr , only for 2nd child rows
                                            {
                                            var rowID = "cr"+m+i;
                                            //tr.setAttribute("class", rowID);
                                        }
                                        tr.setAttribute("class", rowID);  
        
                                            for(var d=0;d<datanew[m][i][a][c].length;d++){
                                                var td = document.createElement('td'); 
                                                
                                                // Add buttons to 1st coloumn in 2nd layer which will help to show/hide 3rd layer of data
                                                // Add the button if main data set element has more than one arrys to first element of the each array  
                                                if( c==0 && d==0){
                                                    // Add padding to first coloum with button in 2nd layer.
                                                    td.style.paddingLeft = styles["2ndLayerPaddingLeftWithButton"]
                                                    // Add down button  
                                                    var downButton = document.createElement('a');
                                                    downButton.innerHTML = styles.downButtonIcon;
                                                    downButton.setAttribute("id", "cdb"+m+i);
                                                    downButton.style.display = ''
                                                    downButton.style.color = styles.downButtonColor
                                                    downButton.style.marginRight = styles.ButtonMarginRight
                                                    downButton.onclick = function(){ 
                                                        //console.log(this.id);
                                                        var index = this.id.split("cdb")[1]; 
                                                        //console.log(index);
                                                        var rows = document.getElementsByClassName("cr"+index);
                                                        // wait(500);
                                                        for (var b = 0; b < rows.length; b++){                                         
                                                            rows[b].style.display = ''
                                                                
                                                        }
                                                        // row.style.display=''
                                                        var button = document.getElementById("cub"+index);
                                                        button.style.display = ''
                                                        this.style.display = 'none'
                                                    };
                                                    td.appendChild(downButton)
                            
                                                    // Add up button 
                                                    var upButton = document.createElement('a');
                                                    upButton.innerHTML = styles.upButtonIcon;
                                                    upButton.setAttribute("id", "cub"+m+i);
                                                    upButton.style.display = 'none'
                                                    upButton.style.color = styles.upButtonColor
                                                    upButton.style.marginRight = styles.ButtonMarginRight
                                                    upButton.onclick = function(){ 
                                                        var index = this.id.split("cub")[1]; 
                                                        var rows = document.getElementsByClassName("cr"+index);
                                                        for (var b = 0; b < rows.length; b++){
                                                            rows[b].style.display = 'none';
                                                            
                                                        }
                                                        // row.style.display='none'
                                                        var button = document.getElementById("cdb"+index);   
                                                        button.style.display = ''
                                                        this.style.display = 'none'
                                        
                                                    };
                                                    td.appendChild(upButton)
                                                }
                                            
                                                if(Array.isArray(datanew[m][i][a][c][d])){
                                                    td.innerHTML = "<div style = 'text-align:right;color:black'><b>"+datanew[m][i][a][c][d][0]+"</b></div><p style = ' float:right ;color:black'>"+datanew[m][i][a][c][d][1]+
                                                    "</p><p style = 'float:left ;color:red'>"+datanew[m][i][a][c][d][2]+"</p>"                                                }
                                                else{
                                                    td.appendChild(document.createTextNode(datanew[m][i][a][c][d]))
                                                }                   
                                                // if color the td rows based on the given parameter ( ex - month)
                                                if(0<d && d<=2){
                                                    td.style.backgroundColor = styles.backgroundColorForPassedMonths;
                                                }
                                                if(c>0&&d==0){
                                                    td.style.paddingLeft = styles["3rdLayerPaddingLeft"];
                                                }
                                                // Start with the hidden of the additionl colomns
                                                                                              
                                                    tr.style.display= 'none'
                                            
                                               
                                                tr.appendChild(td)
                                                }
                                                tbdy.appendChild(tr);
                                            }
                                            break;
                                        }
                            if(k>0){
                                td.style.paddingLeft = '0px'
                            }
                            // if more data is inside data elements (as an Array) it need to be seperated and put it into the table cell
                            if(Array.isArray(datanew[m][i][a][k])){
                                td.innerHTML = "<div style = 'text-align:right;color:black'><b>"+datanew[m][i][a][k][0]+"</b></div><p style = ' float:right ;color:black'>"+datanew[m][i][a][k][1]+
                                "</p><p style = 'float:left ;color:red'>"+datanew[m][i][a][k][2]+"</p>"
                            }
                            else{
                                td.appendChild(document.createTextNode(datanew[m][i][a][k]))
                            }
                            
                            // if color the td rows based on the given parameter ( ex - month)
                            if(0<k && k<=2){
                                td.style.backgroundColor = styles.backgroundColorForPassedMonths;
                            }

                            // Start with the hidden of the additionl colomns
                            if(a>0){
                                tr.style.display= 'none'
                                // add pdding to only the first colomn
                                if(k==0){
                                td.style.paddingLeft = styles["2ndLayerPaddingLeftWithoutButton"]
                                }
                            }
                            tr.appendChild(td)
                            }
                            tbdy.appendChild(tr);
                          
                    }      
    }
        }
        else{
            // Static data feilds ( Summations , Results feilds)
            // Styles of this rows need to be added seperatly.
            var tr = document.createElement('tr');
            for(var n = 0; n<datanew[m].length;n++){
                // Add data directly to the
                //console.log(datanew[m].length);
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(datanew[m][n]))
                tr.appendChild(td)
                tbdy.appendChild(tr);

            }
        }
    }

    tbl.appendChild(tbdy);
    div.appendChild(tbl)
}

function getIndex(btn){
    return btn.closest('tr').index();
}

window.onload=UserAction;


