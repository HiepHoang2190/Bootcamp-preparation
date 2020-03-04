function trungbinh (){
let toan = parseInt(document.getElementById("toan").value);
let hoa = parseInt(document.getElementById("hoa").value);
let sinh = parseInt(document.getElementById("sinh").value);
let vatly = parseInt(document.getElementById("vatly").value);
let area = (toan + vatly + hoa + sinh)/4;
let tong = (toan + vatly + hoa + sinh);
document.getElementById("aaaa").innerHTML =  "Điểm trung bình: " + area;
document.getElementById("bbb").innerHTML =  "Tổng " + tong;
}

function change(){
  let  inputC = parseInt(document.getElementById("inputC").value);
  let F = (inputC *9/5)+32;
  document.getElementById("ccc").innerHTML =  F;
}



function Radius(){
    let  inputR = parseInt(document.getElementById("inputR").value);
    let R = (inputR *inputR)*3.14;
    document.getElementById("ddd").innerHTML =  R;
  }


  function chuvi(){
    let  inputZ = parseInt(document.getElementById("inputZ").value);
    let Z = (inputZ *2)*3.14;
    document.getElementById("eee").innerHTML =  Z;
  }
