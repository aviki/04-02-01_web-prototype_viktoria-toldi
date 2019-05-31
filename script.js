const BOX1 = document.querySelectorAll(".box")
BOX1.forEach(item => item.addEventListener("click", shakeBOX1));
function shakeBOX1() {
  this.classList.toggle("shake");
  setTimeout(function(){
    document.location = "submission.html";
  }, 2000);
}
