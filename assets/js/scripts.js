// slider function
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');

  if (slides.length) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < dots.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 4500);
  }
}

window.onload = window.onresize = function () {
  let iframe = document.getElementsByClassName('iframe');
  if (iframe.length) {
    for (let i = 0; i < iframe.length; i++) {
      iframe[i].style.height =
        iframe[i].contentWindow.document.body.scrollHeight * 1.02 + 'px';
    }
  }
};

// window.onload = window.onresize = function () {
//   let iframeServ = document.getElementById('iframeServ');
//   if (iframeServ) {
//     let inIframe = iframeServ.contentWindow;
//     let altoIframe = inIframe.document.body.scrollHeight;
//     let nuevoAlto = altoIframe * 1.02 + 'px';
//     iframeServ.style.height = nuevoAlto;
//   }
// };
