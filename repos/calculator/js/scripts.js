var total = "";


function input(num) {
    if (num == "=")
    {      
        total = eval(total);
        console.log("Total: " + eval(total));
    }
    else if (num == "C"){
        total = "";
    }
    else {
        total += num;
        console.log(total);
        
    }    
    document.getElementById("total").innerHTML = total;
}
