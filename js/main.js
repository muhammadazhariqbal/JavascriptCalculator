function getinput(i){
    var x =i;
   
    if (x=="="){
       var y= document.getElementById("calculated-numbers").innerHTML=eval(document.getElementById("calculated-numbers").innerHTML);
        document.getElementById("result").innerHTML=y;
         document.getElementById("calculated-numbers").innerHTML="";
    } else if (x=="c"){
        document.getElementById("calculated-numbers").innerHTML="";
        document.getElementById("result").innerHTML="";
    } else {
        document.getElementById("calculated-numbers").innerHTML+=x;
    }
 

}