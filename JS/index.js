// const spans = document.querySelectorAll('h1 span')
// spans.forEach(span => span.addEventListener('mouseover',  function (e) {
//     span.classList..add('animated' , 'rubberBand');
// }))
// spans.forEach(span => span.addEventListener('mouseout', function (e) {
//     span.classList..remove('animated' , 'rubberBand');
// }))

// const htmlbar = document.querySelector('.bar-html')
// const cssbar = document.querySelector('.bar-css')
// const jsbar = document.querySelector('.bar-js')
// const reactbar = document.querySelector('.bar-react')

// let t1 = new TimelineLite();

// t1.fromTo(htmlbar, .75, { width: 'calc(0% - 6%) ' }, { width: 'calc(90% - 6%) ' ease: Power4.easeOut })
//     .fromTo(cssbar, .75, { width: 'calc(0% - 6%) ' }, { width: 'calc(70% - 6%) ' ease: Power4.easeOut })
//     .fromTo(jsbar, .75, { width: 'calc(0% - 6%) ' }, { width: 'calc(50% - 6%) ' ease: Power4.easeOut })
//     .fromTo(reactbar, .75, { width: 'calc(0% - 6%) ' }, { width: 'calc(30% - 6%) ' ease: Power4.easeOut })

// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.skills',
//     triggerHook: 0 ,
// })
//     .setTween(11)
// .addTo(controller)

// const showRequiredCategory = event => {
//     const getID = event.id
//     const links = document.querySelectorAll('.info-work button')
//     for (i = 0; i < links.length; i++){
//         if (links[i].hasAttributed('class')) {
//             links[i].classList.remove('active')
//         }
//     }
//     event.classList.add('.active')
//     const getCategory = document.querySelector(`.category-${getId}`)
//     const categories = document.querySelectorAll(`div[class ^ = "category-"]`)
//     for (i = 0; i < links.length; i++){
//         if (categories[i].hasAttributed('class')) {
//             categories[i].classList.remove('showcase')
//             categories[i].classList.add('hidecase')
//         }
//     }

//     getCategory.classList.remove('hidecase')
//     getCategory.classList.add('showcase')
// }
const contactBtn = document.querySelector(".contact1").addEventListener("onclick", (e) => {
     const result = document.querySelector(".contact");
     return (e.contactBtn = result);
});
