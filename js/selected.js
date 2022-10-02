document.getElementById("players").addEventListener("click", function (event) {
  let mainOrder = document.getElementById("main-order");
  //   error handel
  if (mainOrder.children.length === 5) {
    alert("no!!!");
    mainOrder.removeChild();
  }
  if (event.target.innerText == "SELECT") {
    // btn disable error
    let btn = event.target;
    btn.setAttribute("disabled", "");
    btn.style.backgroundColor = "gray";

    let playerName = event.target.parentElement.firstElementChild.innerText;
    let newList = document.createElement("li");
    newList.innerText = playerName;
    mainOrder.appendChild(newList);
  }
});
