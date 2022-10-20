$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:2, //Отступ от элемента справа в 50px
        nav:false, //Отключение навигации
        dots: true,
        dotsEach: 1,
      
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

let nav = $("#nav");
let navToggle = $("#navToggle");

$("#navToggle").on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
});
