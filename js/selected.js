document.getElementById("players").addEventListener("click", function (event) {
  let mainOrder = document.getElementById("main-order");
  if (event.target.innerText == "SELECT" && mainOrder.children.length < 5) {
    let btn = event.target;
    btn.setAttribute("disabled", "");
    btn.style.backgroundColor = "gray";

    let playerName = event.target.parentElement.firstElementChild.innerText;
    let newList = document.createElement("li");
    newList.innerText = playerName;
    mainOrder.appendChild(newList);
  } else if (
    event.target.innerText == "SELECT" &&
    mainOrder.children.length >= 5
  ) {
    alert("your Selected 5 done!");
  }
});
