/*Akordiona gobernatzeko...... */
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/*Gorako botoia agerrarazteko, ezkutatzeko eta klikatuz orriaren goialdera igotzeko.......*/
const toTop = (() => {
  let button = document.getElementById("toTop");
  window.onscroll = () => {
    button.classList[
      (document.documentElement.scrollTop > 200) ? "add" : "remove"
    ]("is-visible")
  }
  button.onclick = () => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
  }
})();
