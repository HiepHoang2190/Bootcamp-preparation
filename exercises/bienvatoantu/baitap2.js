function trungbinh (){

let toan = parseFloat(document.getElementById("toan").value);
let hoa = parseFloat(document.getElementById("hoa").value);
let sinh = parseFloat(document.getElementById("sinh").value);
let vatly = parseFloat(document.getElementById("vatly").value);
let area = (toan + vatly + hoa + sinh)/4;
let tong = (toan + vatly + hoa + sinh);
document.getElementById("aaaa").innerHTML =  "Điểm trung bình: " + area;
document.getElementById("bbb").innerHTML =  "Tổng " + tong;
}

function change(){
  let  inputC = parseFloat(document.getElementById("inputC").value);
  let F = (inputC *9/5)+32;
  document.getElementById("ccc").innerHTML =  F;
}



function Radius(){
    let  inputR = parseFloat(document.getElementById("inputR").value);
    let R = (inputR *inputR)*Math.PI;
    document.getElementById("ddd").innerHTML =  R;
  }


  function chuvi(){
    let  inputZ = parseFloat(document.getElementById("inputZ").value);
    let Z = (inputZ *2)*Math.PI;
    document.getElementById("eee").innerHTML =  Z;
  }
