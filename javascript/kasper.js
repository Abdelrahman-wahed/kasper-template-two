// setTimeout(
//   function Popup() {
//     let div = document.createElement("div");
//     div.className = "pop";
//     let close = document.createElement("span");
//     let heading = document.createElement("h1");
//     let pragragh = document.createElement("p");
//     let closeText = document.createTextNode("X");
//     let headingText = document.createTextNode("Welcome");
//     let pragraghText = document.createTextNode("Welcome To Elzero Web School");
//     close.appendChild(closeText);
//     heading.appendChild(headingText);
//     pragragh.appendChild(pragraghText);
//     div.appendChild(close);
//     div.appendChild(heading);
//     div.appendChild(pragragh);
//     document.body.appendChild(div);

//     close.onclick = function () {
//       div.remove();

//     };
//   },

//   5000
// );

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let imgSlides = document.querySelectorAll(".landing img");
let bulletContainer = document.querySelector(".bullet");
let ArrayImg = Array.from(imgSlides);
let countSlide = ArrayImg.length;
let currentIndex = 1;

for (let i = 1; i <= countSlide; i++) {
  let span = document.createElement("span");
  span.setAttribute("data-index", i);
  if (i == 1) {
    span.className = "active";
  }
  bulletContainer.appendChild(span);
}

let bulletList = document.querySelectorAll(".landing span");
let Arraybullet = Array.from(bulletList);
console.log(Arraybullet);
Arraybullet.forEach((e) => {
  e.onclick = () => {
    currentIndex = e.getAttribute("data-index");
    check();
  };
});
check();
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex++;
    check();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex--;
    check();
  }
}

function check() {
  AllRemove();

  ArrayImg[currentIndex - 1].classList.add("active");
  Arraybullet[currentIndex - 1].classList.add("active");

  if (currentIndex === 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentIndex === countSlide) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function AllRemove() {
  ArrayImg.forEach((e) => {
    e.classList.remove("active");
  });

  Arraybullet.forEach((e) => {
    e.classList.remove("active");
  });
}
