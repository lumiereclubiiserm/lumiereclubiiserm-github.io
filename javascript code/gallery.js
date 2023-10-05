//gallery
const gallery = document.querySelector("#gallery");
const slider = document.querySelector(".slider");
const fader = document.querySelector("#image-track");
const descrip = document.querySelector(".description");

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  if (window.innerWidth > 850) {
    op = 1 + Math.max(Math.min(nextPercentage, 0), -12) / 12
    descrip.style.opacity = op
  }

  track.animate({
    transform: `translate(${nextPercentage}%, 0)`
  }, { duration: 1200, fill: "forwards" });

  for (const image of track.getElementsByClassName("image-parallax")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
  
window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

document.querySelectorAll('.image-track-item').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle("open")
  }
)});