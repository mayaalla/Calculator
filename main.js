let clc = document.getElementById('clc');
let rslt = document.getElementById('rslt');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn10 = document.getElementById('btn10');
let btn11 = document.getElementById('btn11');
let btn12 = document.getElementById('btn12');
let btn13 = document.getElementById('btn13');
let btn14 = document.getElementById('btn14');
let btn15 = document.getElementById('btn15');
let btn16 = document.getElementById('btn16');
let btn17 = document.getElementById('btn17');
let t = false;
let x = false;
let r = false;
let c = false;
let d;
btn1.onclick = function () {
clc.value ="";
rslt.value ="RESULT";
rslt.style.color = "#109bff";
x = false;
c = false;
}
function clickk(a){
    a.onclick = function (){
        if(rslt.value == "RESULT" ){
        clc.value = clc.value.toString() + a.value.toString();
        y = a.value.toString();
        x = true;
        if(y == "+" || y == "-" || y == "*" || y == "/"){
            t = true;
        }else {
            t = false;
        }
      
    } else {
      clc.value = rslt.value.toString() + a.value.toString();
        rslt.value = "RESULT";
        rslt.style.color = "#109DFF";
        y = a.value.toString();
        x = true;
        if(y == "+" || y == "-" || y == "*" || y == "/"){
            t = true;
        }else {
            t = false;
        }
    }

    if (rslt.value == "ERROR"){
        rslt.value = "RESULT"
        rslt.style.color = "#109DFF";
        clc.value = clc.value.toString() + a.value.toString();
        y = a.value.toString();
        x = true;
        if(y == "+" || y == "-" || y == "*" || y == "/"){
            t = true;
        }else {
            t = false;
        }
    }
}
}
clickk(btn4);
clickk(btn5);
clickk(btn6);
clickk(btn8);
clickk(btn9);
clickk(btn10);
clickk(btn12);
clickk(btn13);
clickk(btn14);
function equal (btn){
btn.onclick = function () {
    if (clc.value != "" && t == false){
        if(eval(clc.value) == 2){
            rslt.value = "11";
            c = true;
        }else{
    rslt.value = eval(clc.value);
    rslt.style.color = "black";
    r = true;
    c=true;
        }
    }
    else if (clc.value != "" && t == true){
        rslt.value = "ERROR";
        rslt.style.color = "red";
        c=false;
    }
   }
}
equal(btn15);
function zero (btn){
btn.onclick = function () {
    
    if(rslt.value != "RESULT"){
        clc.value = "";
        rslt.value = "RESULT";
        rslt.style.color = "#109bff";
        c = false;
     } 
     else{
        clickk(btn);
        
     }
    }
}
zero(btn16);
btn17.onclick = function () {
    if(x == false){
        clc.value = "";
     }
     else{
        clickk(btn17);
     }
}

function anotherClculation(b){
  b.onclick = function () {
    if(c=true && rslt.value != "RESULT"){
        clc.value = rslt.value.toString() + b.value.toString();
        rslt.value = "RESULT";
        rslt.style.color = "#109DFF";
     }
     else
     if (c=false && rslt.value == "RESULT"){{ clickk(b);}
  }}
}
    clickk(btn2);
clickk(btn3);
clickk(btn7);
clickk(btn11);

let p ;

function anotherPlus(b){
    
    b.onclick = function () {
        if(c=true && rslt.value != "RESULT"){
            p = b.value.toString();
            clc.value = rslt.value.toString() + p;
            rslt.value = "RESULT";
            rslt.style.color = "#109DFF";
         }
         else
         if (c=false && rslt.value == "RESULT"){{ clickk(b);}
      }}
}
let del = document.getElementById('del');
function delat (a) {

a.onclick = function (){
  if(clc.value != "" ){
         d =clc.value.toString();
          clc.value = d[clc.value.length -2]

  }
else { if(clc.value.length == 1){
    clc.value = "";
 
   
}



}
}
}
delat(del)