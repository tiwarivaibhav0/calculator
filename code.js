
function update7(){
    document.getElementById("text").value+=7;
}
function update8(){
    document.getElementById("text").value+=8;
}
function update9(){
    document.getElementById("text").value+=9;
}
function update4(){
    document.getElementById("text").value+=4;
}
function update5(){
    document.getElementById("text").value+=5;
}
function update6(){
    document.getElementById("text").value+=6;
}
function update1(){
    document.getElementById("text").value+=1;
}
function update2(){
    document.getElementById("text").value+=2;

}
function update3(){
    document.getElementById("text").value+=3;

}

function update0(){
    document.getElementById("text").value+=0;
}
function updateC(){
    document.getElementById("text").value="";
}

function updateDiv(){
    document.getElementById("text").value+="/";
    
}
function updateMul(){
    document.getElementById("text").value+="*";
    
}
function updatePlus(){
    document.getElementById("text").value+="+";
    
}
function updateMinus(){
    document.getElementById("text").value+="-";
    
}
function updateEqual(){
    var str=document.getElementById("text").value;
     var temp="";
    for(let i=0;i<str.length;i++){
        if(str[i]=="/"||str[i]=="*"||str[i]=="+"||str[i]=="-"){
            var operator=str[i];
            var opr1=Number(temp);
            temp="";
        }
        else if(i==str.length-1){
            temp+=str[i];
            var opr2=Number(temp);
            temp="";
      }
       else{
            temp+=str[i];
       }
    }
    console.log(opr1,operator,opr2);
    if(operator=="/"){
        var res=opr1/opr2;
        document.getElementById("text").value=res;

    }
    if(operator=="*"){
        var res=opr1*opr2;
        document.getElementById("text").value=res;

    }
    if(operator=="+"){
        var res=opr1+opr2;
        document.getElementById("text").value=res;

    }
    if(operator=="-"){
        var res=opr1-opr2;
        document.getElementById("text").value=res;

    }

}