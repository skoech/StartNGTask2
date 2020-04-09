// data array with principal and time objects
let data = [{'principal':2500,'time':1.8},
            {'principal':1000,'time':5},
            {'principal':3000,'time':1},
            {'principal':2000,'time':3},
        ];

//console.log(data);

//function with conditionals and calculates interest data
function sampleFunction(dataObject){
    for(let i of dataObject ){
            if(i.principal >= 2500 && i.time > 1 && i.time < 3){
                i.rate = 3 ;
            }else if(i.principal >= 2500 && i.time >= 3){
                i.rate = 4;
            }else if(i.principal < 2500 || i.time <= 1){
                i.rate = 2;
            }else{
                i.rate = 1;
            };
    }; 

    for(let i of dataObject){ 
        i.interest = (i.principal * i.rate * i.time) / 100;
    } ;

    let interestData = dataObject;

    console.log(interestData); 

    return interestData;
    
    };
//calling the function with data passed
sampleFunction(data);
    
