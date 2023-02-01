let val = "";
let sum = ""; // buraya bak
let text = "";
let num1 = 0;
let num2= 0;
let total = 0;
let show = document.querySelector(".show")
let cons = true;
let ic = ""
let ico = ""

function number(num){
    if (cons == true){
        total = 0
    }
    val = num
    sum += val
    show.innerHTML = text + sum;
    if (ico == "p"){
        total += parseInt(sum) || 0
        ico = ""
        sum = ""
        show.innerHTML = "+" + show.innerHTML
        text = show.innerHTML
        cons = false
        ic = ""
    }
    if (ico == "m"){
        total += -parseInt(sum) || 0
        ico = ""
        sum = ""
        show.innerHTML = "-" + show.innerHTML
        text = show.innerHTML
        cons = false
        ic = ""
    }
    
}
function funcs(funcs){
    console.log(ic)
    if(cons == true && funcs == "+" && sum!= ""){
        total += parseInt(sum) || 0
        sum = ""
        show.innerHTML += funcs
        text = show.innerHTML
        cons = false
        ic = "p"
        ico = "p"
    }
    else if(funcs == "+" && sum == ""){
        ico = "p"
    }
    if(cons == true && funcs == "-" && sum != ""){   
        total += -parseInt(sum) || 0
        sum = ""
        show.innerHTML += funcs
        text = show.innerHTML
        cons = false
        ic = "m"
        ico = "m"
    }
    else if(funcs == "-" && sum == ""){
        ico = "m"
    }
    if(funcs == "=" && cons == false){
        show.innerHTML = total
        sum = "0"//burayla
        text = ""
        cons = true
    }
}