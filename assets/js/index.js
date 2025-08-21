  document.addEventListener("DOMContentLoaded", () => {
      // Navbar animation
      gsap.from(".custom-navbar", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Hero text animation (staggered words)
      gsap.from(".hero h1 span", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15 // delay between each word
      });
    });