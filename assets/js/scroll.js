/* Move X Direction */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

/* Move Y Direction */
const observer_1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("move-up");
    } else {
      entry.target.classList.remove("move-up");
    }
  });
});

const hiddenElements_1 = document.querySelectorAll(".move-up-hidden");
hiddenElements_1.forEach((el) => {
  observer_1.observe(el);
});
