function clr(){ 
    document.getElementById("input").value ="";
}
function btn(val){ 
    document.getElementById("input").value+=val;
}
function answer(){
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y;
}
