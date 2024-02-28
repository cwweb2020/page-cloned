document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("totalCard");

  card.addEventListener("mouseenter", function () {
    //  card.classList.add('hover');
    //  alert("Hovered");
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("hover");
  });
});
