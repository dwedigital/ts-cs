console.log("IT WORKS!");
const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");
const button = document.querySelector(".accept");

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 0.7
});
ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function (e) {
//     console.log(e.srcElement.scrollHeight);
//     console.log(e.srcElement.scrollTop);

// })
