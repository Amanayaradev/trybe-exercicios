document.getElementById("header-container").style.backgroundColor = "#219F60";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "#FF805A";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "#FFDF67";
let elementClass = document.querySelectorAll(".emergency-tasks div h3");
for(let index = 0; index < elementClass.length; index += 1){
    elementClass[index].style.backgroundColor = "#D336A3"
}
let elementClassNo = document.querySelectorAll(".no-emergency-tasks div h3");
for(let index2 = 0; index2 < elementClassNo.length; index2 += 1){
    elementClassNo[index2].style.backgroundColor = "black"
}
