// let a = document.querySelector(".box1")
// console.log(a)
// let imagehover = a.getAttribute("data-imagehover")
// let imagedefault = a.getAttribute("data-imagedefault")
// a.style.backgroundImage = 'url(' +imagedefault +')'
// a.addEventListener("mouseenter", function(){
//     a.style.backgroundImage = 'url(' +imagehover +')'
// })
// a.addEventListener("mouseleave", function(){
//     a.style.backgroundImage = 'url(' +imagedefault +')'
// })

let allbox = document.querySelectorAll(".boxes")
allbox.forEach(function (e) {
    let imagehover = e.getAttribute("data-imagehover")
    let imagedefault = e.getAttribute("data-imagedefault")
    e.style.backgroundImage = 'url(' + imagedefault + ')'
    e.addEventListener("mouseenter", function () {
        e.style.backgroundImage = 'url(' + imagehover + ')'
    })
    e.addEventListener("mouseleave", function () {
        e.style.backgroundImage = 'url(' + imagedefault + ')'
    })
})

