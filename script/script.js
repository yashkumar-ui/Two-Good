function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadinganimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursor",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();

function menudonateAnimation() {
  const menupage = document.querySelector("#menu");
  const menuicon = document.querySelector("#icons .menuu");
  const menuclose = document.querySelector(".close");
  const donateicon = document.querySelector(".donate");
  const navv = document.querySelector("#nav svg");
  const menudonate = document.querySelector(".menudonate");
  const menudonatebtn = document.querySelectorAll(".menudonatebtn");
  const donatedonate = document.querySelector(".donatedonate");
  const menufooter = document.querySelector(".menufooter");
  menuicon.addEventListener("click", function () {
    menupage.style.transform = "translateY(-0%)";
    setTimeout(() => {
      menuicon.style.display = "none";
      menuclose.style.display = "inline";
      donateicon.style.color = "#F7F7F7";
      navv.style.color = "#F7F7F7";
    }, 400);
    setTimeout(() => {
      menudonate.style.opacity = "1";
      menudonate.style.display = "flex";
      menudonate.style.transform = "scale(1)";
    }, 500);
    setTimeout(() => {
      menufooter.style.transform = "scale(1)";
    }, 600);
  });

  menuclose.addEventListener("click", function () {
    menupage.style.transform = "translateY(-100%)";
    menuicon.style.display = "inline";
    menuclose.style.display = "none";
    donateicon.style.color = "#333";
    navv.style.color = "black";
    menudonate.style.opacity = "0";
    menudonate.style.display = "none";
    menufooter.style.transform = "scale(0)";
  });

  donateicon.addEventListener("click", function () {
    menupage.style.transform = "translateY(-0%)";
    setTimeout(() => {
      menuicon.style.display = "none";
      menuclose.style.display = "inline";
      donateicon.style.color = "#F7F7F7";
      navv.style.color = "#F7F7F7";
    }, 400);
    setTimeout(() => {
      menufooter.style.transform = "scale(1)";
    }, 600);
  });

  menudonatebtn.forEach((e) => {
    e.addEventListener("click", function () {
      setTimeout(() => {
        menudonate.style.opacity = "0";
        menudonate.style.display = "none";
        donatedonate.style.opacity = "1";
        donatedonate.style.display = "flex";
      }, 500);
    });
  });

  menuclose.addEventListener("click", function () {
    menupage.style.transform = "translateY(-100%)";
    donateicon.style.color = "#333";
    navv.style.color = "black";
    donatedonate.style.opacity = "0";
    donatedonate.style.display = "none";
    menufooter.style.transform = "scale(0)";
  });
}
menudonateAnimation();
