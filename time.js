
// Time  JS

function tS(){ x=new Date(); x.setTime(x.getTime()); return x; } 
function lZ(x){ return (x>9)?x:'0'+x; } 
function tH(x){ if(x==0){ x=12; } return (x>12)?x-=12:x; } 
function dT(){ if(fr==0){ fr=1; document.write('<span id="tP">'+eval(oT)+'</span>'); } document.getElementById('tP').innerHTML=eval(oT); setTimeout('dT()',1000); } 
function aP(x){ return (x>11)?'PM':'AM'; } 
var fr=0,oT="lZ(tH(tS().getHours()))+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+' '+aP(tS().getHours())";


document.write('<script language="JavaScript">dT();</script>')