// identifire varaible
var Bill=document.getElementById("Bill");
var number_people=document.getElementById("number_people");
var custom=document.getElementById("custom");
var error=document.getElementById("error");
var result=document.getElementById("result");
var result_1=document.getElementById("result_1");
var reset=document.getElementById("reset");
// calculate_tip
function tip(value){
    if(number_people.value == 0){
        error.innerHTML="can not be zero";
    }else{
        error.innerHTML="";
        let Tip= (Bill.value * value) / number_people.value;
        let alltip=Bill.value * value;
        result.innerHTML="$"+Tip;
        result_1.innerHTML="$"+alltip;
        Bill.value="";
        number_people.value="";
        reset.style.backgroundColor="hsl(172, 67%, 45%)";
        reset.style.color="hsl(0, 0%, 100%)";
        }
       

}
// calculate_customtip
function cust(){
    if(number_people.value == 0){
        error.innerHTML="can not be zero";
    }else{
        error.innerHTML="";
        let Tip= (Bill.value * (custom.value / 100)) / number_people.value;
        let alltip=Bill.value *  (custom.value / 100);
        result.innerHTML="$"+Tip;
        result_1.innerHTML="$"+alltip;
        Bill.value="";
        number_people.value="";
        custom.value="";
        reset.style.backgroundColor="hsl(172, 67%, 45%)";
        reset.style.color="hsl(0, 0%, 100%)";
        }
}

// button_reset
reset.addEventListener("click",()=>{
    result.innerHTML="$ 0.00";
    result_1.innerHTML="$ 0.00";
    reset.style.backgroundColor="hsl(186, 14%, 43%)";
    reset.style.color="hsl(184, 14%, 56%)";
    
    
})

