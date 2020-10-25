var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var floatBallW = 100;
var floatBallH = 100;
var floatAreaW = 800;
var floatAreaH = 500;
var removeAreaW = floatAreaW;
var removeAreaH = 100;

var outerContainer = document.createElement("div");
outerContainer.className = "outerContainer";
outerContainer.style = "position: relative;"

var container = document.createElement("div");
container.className = "container";
container.style.width = floatAreaW + "px";
container.style.height = floatAreaH + "px";
container.style.touchAction = "none";
container.style.backgroundColor = "#333";

var dragItem = document.createElement("div");
dragItem.className = "item";
dragItem.style.width = floatBallW + "px";
dragItem.style.height = floatBallH + "px";
dragItem.style.touchAction = "none";
dragItem.style.userSelect = "none";
dragItem.style.backgroundColor = "rgb(245, 230, 99)";

var removeArea = document.createElement("div");
removeArea.className = "removeArea hide";
removeArea.style.width = removeAreaW + "px";
removeArea.style.height = removeAreaH + "px";
removeArea.style.position = "absolute";
removeArea.style.pointerEvents = "none";
removeArea.style.bottom = "0px";
removeArea.style.backgroundColor = "rgba(255, 255, 255, .5)";

container.appendChild(dragItem);
container.appendChild(removeArea);

outerContainer.appendChild(container);
document.body.appendChild(outerContainer);

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
    removeArea.className = "removeArea show";
  }
}

function dragEnd() {
  initialX = currentX;
  initialY = currentY;

  active = false;
  removeArea.className = "removeArea hide";

  if (currentY + floatBallH <= 500 && currentY + floatBallH > 450) {
    console.log(currentY + floatBallH, 'close');
  } 
}

function drag(e) {
  if (active) {
    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    currentX = Math.max(0, Math.min(currentX, floatAreaW - floatBallW));
    currentY = Math.max(0, Math.min(currentY, floatAreaH - floatBallH));

    xOffset = currentX;
    yOffset = currentY;

    setPosition(currentX, currentY, dragItem);
  }
}

function setPosition(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  // el.style = "position: fixed; left: " + xPos + "px; top: " + yPos + "px;";
}








