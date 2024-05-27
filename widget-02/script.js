const dragAndDropItems = document.getElementById("stocks");

new Sortable(dragAndDropItems, {
  animation: 350,
  chosenClass: "stock-chosen",
  dragClass: "stock-drag",
});
