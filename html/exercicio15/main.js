const text = document.getElementById("text");

text.classList.add("destaque");

setTimeout(() => {
  text.classList.remove("destaque");
}, 2000);
