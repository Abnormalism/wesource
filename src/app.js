/* BEGIN NAV */

const burgerBtn = document.querySelector(".burger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const navLink = document.querySelectorAll(".nav-link");

burgerBtn.addEventListener("click", () => {
  navHeightControl();
});

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLink.forEach((link) => {
      link.classList.remove("nav-active");
    });

    const currentTargetLink = e.currentTarget;

    currentTargetLink.classList.add("nav-active");

    navHeightControl();
  });
});

function navHeightControl() {
  const mobileNavClasslist = mobileNav.classList;

  return mobileNavClasslist.contains("h-[4rem]")
    ? mobileNavClasslist.replace("h-[4rem]", "h-[13]")
    : mobileNavClasslist.replace("h-[13]", "h-[4rem]");
}
/* END NAV */

/* BEGIN TOP BTN */
const topBtn = document.querySelector(".to-top");
const services = document.getElementById("services");

window.addEventListener("scroll", () => {
  const showTopBtn = services.getBoundingClientRect().top;

  showTopBtn <= 200
    ? topBtn.classList.remove("scale-0")
    : topBtn.classList.add("scale-0");
});

/* END TOP BTN */

/* BEGIN GSAP ANIMATIONS */
gsap.fromTo(
  ".nav-link",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, stagger: 0.4, ease: Power2.easeIn }
);

/* END GSAP ANIMATIONS */
