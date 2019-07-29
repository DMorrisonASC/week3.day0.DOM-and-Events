document.getElementsByClassName("right_side")[0].style.backgroundColor =
  "#d3c26f";

let change = document.getElementsByClassName("name");
for (let i = 0; i < change.length; i++) {
  const name = change[i];
  name.style.textShadow = "-6px 5px 2px yellow";
}
