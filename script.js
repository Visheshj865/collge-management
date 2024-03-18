var form1 = document.querySelector("form1");
var form2 = document.querySelector("form2");
var next1 = document.getElementById("nxtBtn");
next1.onclick = function () {
  form1.style.opacity = "0";
  form2.style.opacity = "100";
  //   form2.style.display = "block";
};
