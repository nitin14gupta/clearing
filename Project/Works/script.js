const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp: 0.1, //smoothness level
});

var elems = document.querySelectorAll('.elem');
var page2 = document.querySelector('.page2');
elems.forEach((ele) =>{
    ele.addEventListener('mouseenter', () =>{
        var bgimg = ele.getAttribute('data-img')
        page2.style.backgroundImage = `url(${bgimg})`
    })
})