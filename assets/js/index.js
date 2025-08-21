   const teamMembers = [
      { name: "Creative Design", role: "We create visually stunning designs that capture your brand's essence and engage your audience." },
      { name: "Digital Marketing", role: "Our data-driven marketing strategies help you reach the right audience and maximize ROI." },
      { name: "Web Development", role: "We build responsive, high-performance websites and applications with cutting-edge technologies." },
      { name: "Mobile Apps", role: "From iOS to Android, we create intuitive mobile experiences that users love." },
      { name: "SEO Optimization", role: "Boost your visibility and rankings with our comprehensive SEO strategies." },
      { name: "Social Media", role: "Engage your audience and build your brand with our social media expertise." },
    ];

    const cards = document.querySelectorAll(".card");
    const memberName = document.querySelector(".member-name");
    const memberRole = document.querySelector(".member-role");
    const leftArrow = document.querySelector(".nav-arrow.left");
    const rightArrow = document.querySelector(".nav-arrow.right");
    let currentIndex = 0;
    let isAnimating = false;

    function updateCarousel(newIndex) {
      if (isAnimating) return;
      isAnimating = true;

      currentIndex = (newIndex + cards.length) % cards.length;

      cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
          "center",
          "left-1",
          "left-2",
          "right-1",
          "right-2",
          "hidden"
        );

        if (offset === 0) {
          card.classList.add("center");
        } else if (offset === 1) {
          card.classList.add("right-1");
        } else if (offset === 2) {
          card.classList.add("right-2");
        } else if (offset === cards.length - 1) {
          card.classList.add("left-1");
        } else if (offset === cards.length - 2) {
          card.classList.add("left-2");
        } else {
          card.classList.add("hidden");
        }
      });

      memberName.style.opacity = "0";
      memberRole.style.opacity = "0";

      setTimeout(() => {
        memberName.textContent = teamMembers[currentIndex].name;
        memberRole.textContent = teamMembers[currentIndex].role;
        memberName.style.opacity = "1";
        memberRole.style.opacity = "1";
      }, 300);

      setTimeout(() => {
        isAnimating = false;
      }, 800);
    }

    leftArrow.addEventListener("click", () => {
      updateCarousel(currentIndex - 1);
    });

    rightArrow.addEventListener("click", () => {
      updateCarousel(currentIndex + 1);
    });

    cards.forEach((card, i) => {
      card.addEventListener("click", () => {
        updateCarousel(i);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    }

    
    const navbar = document.querySelector('.custom-navbar');
    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
          
          navbar.classList.add('navbar-hidden');
          navbar.classList.remove('navbar-visible');
        } else {
         
          navbar.classList.remove('navbar-hidden');
          navbar.classList.add('navbar-visible');
        }
      } else {
        
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
      }
      
      lastScrollTop = scrollTop;
    });

    updateCarousel(0);