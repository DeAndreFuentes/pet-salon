console.log("Display js");
// var price;
function display(){
       // clear the field
       document.getElementById("pets").innerHTML = "";
      //travel the array
        for(var i=0;i<salon.pets.length;i++){
              //create the template

            //  console.log(salon.pets[i]);

            if(salon.pets[i].service==="Full Service"){
                 salon.pets[i].price=20.00;
            }else if(salon.pets[i].service==="Shower"){
                salon.pets[i].price=10.00;
            }else if(salon.pets[i].service==="Nails cut"){
                salon.pets[i].price=08.00;
            }else if(salon.pets[i].service==="Hair cut"){
                salon.pets[i].price=12.00;
            }
                
                 var tmp= `<div class="pet">

                         <h3> ${salon.pets[i].name} </h3>

                         <p>  ${salon.pets[i].age} </p>
                         <p>  ${salon.pets[i].gender} </p>
                         <p>  ${salon.pets[i].breed} </p>
                         <p>  ${salon.pets[i].service} </p>
                         <p>  ${salon.pets[i].price} </p>
                         <p>  ${salon.pets[i].owner} </p>
                         <p>  ${salon.pets[i].phone} </p>
                         <p>  ${salon.pets[i].paymentMethod} </p>

                          
                           

                 </div>`;

                 document.getElementById("pets").innerHTML+=tmp;
        }
      

      // display the template in the html

      profitCalculation();

}
display();
//use the function 