//function to display numbers and operators
function insert(num){
    document.getElementById("history").value+=num;
}

//function to show result
function result(){
    let x = document.getElementById("history").value;
    let y = eval(x);
    if(typeof(y)=="float"){
        document.getElementById("output").value = y.toFixed(2);
    }
    else
    document.getElementById("output").value = y;
}       

// function to clear display
function clr(){
    document.getElementById("history").value="";
    document.getElementById("output").value="";
}

//function for backspace button
function ce(){
    var el =document.getElementById("history").value;
    var len=el.substr(0,el.length-1);
    document.getElementById("history").value=len;
    document.getElementById("output").value="";
}