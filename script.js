const div = document.querySelector("#container");
const card = document.querySelector("#aside_container");

div.addEventListener("click", ()=>{
    div.style.backgroundColor = "aqua";
});


card.addEventListener('dblclick', () => {
  card.classList.toggle('large');
});
