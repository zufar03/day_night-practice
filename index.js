let kun = false;

function chek() {
  let uzgar = document.querySelector(".container");
  let moonSon = document.querySelector(".moonSun");
  let daynight = document.querySelector(".dayNight")
  if (kun == true) {
      uzgar.style.background = "#1b1c15";
      moonSon.style.transform = "translateX(0px)"
      moonSon.style.background = "#eee"
      moonSon.style.boxShadow = "0 0 40px #eee"
      daynight.style.background = "#3a3a3a"
      
      kun = false;
    } else {
        daynight.style.background = "#eee"
        uzgar.style.background = "#f0f298";
        moonSon.style.transform = "translateX(90px)"
        moonSon.style.background = "orange"
        moonSon.style.boxShadow = "0 0 40px orange"
        kun = true;
  }
}
