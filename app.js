/*let toggleNav = document.querySelector("#show-hide-toggle");
console.log(toggleNav);
toggleNav.addEventListener("click", function () {
  let navItems = document
    .querySelector("#nav-items")
    .classList.toggle("hidden");
});*/


let toggleNav = $("#show-hide-toggle");
toggleNav.click(()=>{
    let navItems = $("#nav-items")
    navItems.toggle(".hidden");
})


