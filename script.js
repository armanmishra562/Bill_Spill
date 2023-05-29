//for reseting the amount in box
function resetValue() {
    let inputBox = document.getElementById("amount");
    inputBox.value = "";
}

//for calculating tip
function doTipping(a) {
    let amount=0;
    let tipamount=0;
    let inputBox = document.getElementById("amount");
    amount=inputBox.value;
    tipamount=(amount*(a/100));
    document.getElementById("TotalTip").innerText=tipamount;
}

//for no. of people
let count=0;
document.getElementById("cont").innerText = count;
function doIncrement(){
    count = count+1;
    document.getElementById("cont").innerText = count;
    document.getElementById("cont1").innerText = count;
}
function doDecrement(){
    if (count==0){
        document.getElementById("cont").innerText = count;
        document.getElementById("cont1").innerText = count;
    }
    else{
        count = count-1;
        document.getElementById("cont").innerText = count;
        document.getElementById("cont1").innerText = count;
    }
}

//for total amount

function Generate() {

    let tipbox = document.getElementById("TotalTip");
    let tip=parseFloat(tipbox.innerText);
    let inputBox = document.getElementById("amount");
    let amount=parseFloat(inputBox.value);
    let total=(tip+0+(amount));
    document.getElementById("TotalAmount").innerText=total;
    enableButton();
}

//to enable reset button
function enableButton() {
    document.getElementById("Rstbtn").disabled = false;
}

//to reset all 
function ResetAll() {
    document.getElementById("amount").value= 0;
    document.getElementById("cont").innerText= 0;
    document.getElementById("cont1").innerText= 0;
    document.getElementById("TotalTip").innerText= 0.00;
    document.getElementById("TotalAmount").innerText= 0.00;
    document.getElementById("Rstbtn").disabled=true;
}
