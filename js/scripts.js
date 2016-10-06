var modalContentMap = document.querySelector(".modal-content-map");
var modalContentForm = document.querySelector(".modal-content");
var overlay = document.querySelector(".overlay");
var openMap = document.querySelector(".contacts-map");
var openForm = document.querySelector(".btn-open-form");
if (modalContentMap != null){ var closeMap = modalContentMap.querySelector(".btn-exit")};
if (modalContentForm != null){var closeForm = modalContentForm.querySelector(".btn-exit")};
var slideControlPrev = document.querySelector(".slides-prev");
var slideControlNext = document.querySelector(".slides-next");
var slide1 = document.querySelector("#slide1");
var slide2 = document.querySelector("#slide2");
var btnBuy = document.querySelectorAll(".btn-buy");
var modalContentBuy = document.querySelector(".add-to-cart");
var closeCart = modalContentBuy.querySelector(".add-to-cart-close");

if (closeCart != null){
    closeCart.addEventListener("click",function(event){
  event.preventDefault();
  modalContentBuy.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});
};

if (btnBuy != null) {for(var f=0; f<btnBuy. length; f++){ btnBuy[f].addEventListener("click",function(event) {
  event.preventDefault();
  modalContentBuy.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
})}};

if (slideControlPrev != null) {
  slideControlPrev.addEventListener("click",function(event){
  event.preventDefault();
  if (slide1.checked == false) { slide1.checked = true;
    slide2.checked = false;
  } else { slide2.checked = true;
    slide1.checked = false; }
})};

if (slideControlNext != null) {
  slideControlNext.addEventListener("click",function(event){
  event.preventDefault();
  if (slide1.checked == false) { slide1.checked = true;
    slide2.checked = false;
  } else { slide2.checked = true;
    slide1.checked = false; }
})};

if (openMap != null){
    openMap.addEventListener("click",function(event){
  event.preventDefault();
  modalContentMap.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
});
};

if (openForm != null){
    openForm.addEventListener("click",function(event){
  event.preventDefault();
  modalContentForm.classList.add("modal-content-show-flex");
  overlay.classList.add("modal-content-show");
});
};

if (closeForm != null){
    closeForm.addEventListener("click",function(event){
  event.preventDefault();
  modalContentForm.classList.remove("modal-content-show-flex");
  overlay.classList.remove("modal-content-show");
});
};

if (closeMap != null){
    closeMap.addEventListener("click",function(event){
  event.preventDefault();
  modalContentMap.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});
};

if (overlay != null && modalContentMap != null) {
    overlay.addEventListener("click",function(event){
  event.preventDefault();
  if ( modalContentMap.classList.contains("modal-content-show") ){ modalContentMap.classList.remove("modal-content-show")};
  overlay.classList.remove("modal-content-show");
});
};

if (overlay != null && modalContentForm != null) {
    overlay.addEventListener("click",function(event){
  event.preventDefault();
  if (modalContentForm.classList.contains("modal-content-show-flex")) {  modalContentForm.classList.remove("modal-content-show-flex");};
  overlay.classList.remove("modal-content-show");
});
};

if (overlay != null && modalContentBuy != null) {
    overlay.addEventListener("click",function(event){
  event.preventDefault();
  if (modalContentBuy.classList.contains("modal-content-show")) {modalContentBuy.classList.remove("modal-content-show")};
  overlay.classList.remove("modal-content-show");
});
};

    if (ymaps != null) {ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93970743, 30.31704635],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938631,30.323055]);

    myMap.geoObjects.add(myPlacemark);
})};
