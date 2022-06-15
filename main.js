const jsonData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

jsonData.forEach((i) => {
  document.getElementById(`${i.day}-label`).innerHTML = `$${i.amount}`;

  let graph = document.getElementById(`${i.day}-graph`);

  graph.addEventListener(
    "mouseover",
    () => (document.getElementById(`${i.day}-label`).style.display = "block")
  );

  graph.addEventListener(
    "mouseout",
    () => (document.getElementById(`${i.day}-label`).style.display = "none")
  );

  i.amount *= 2.5;
  graph.style.height = `${i.amount}px`;
  document.getElementById(`${i.day}-text`).innerHTML = i.day;
});
