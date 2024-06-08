const elements = document.querySelectorAll(".anim");

let xv = 0, yv = 0;

function update(cursorPosition){
    elements.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        
        let leftside = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zv = (cursorPosition - parseFloat(getComputedStyle(el).left)) * leftside * 0.1;
        el.style.transform = `translateX(calc(-50% + ${-xv * speedx}px)) translateY(calc(-50% + ${yv * speedy}px)) perspective(900px) translateZ(${zv * speedz}px)`
    })
}

 update(0);

window.addEventListener("mousemove", (e) => {
    xv = e.clientX - window.innerWidth / 2;
    yv = e.clientY - window.innerHeight / 2;

    update(e.clientX);
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }