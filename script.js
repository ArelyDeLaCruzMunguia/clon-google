const preferencesEnlace = document.querySelector(".preferences-enlace");
const preferensList = document.querySelector(".preferens-list");

preferencesEnlace.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (preferensList.style.display === "none" || preferensList.style.display === "") {
    preferensList.style.display = "block";
  } else {
    preferensList.style.display = "none";
  }
});


