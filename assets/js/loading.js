// Loading screen functionality
    document.addEventListener('DOMContentLoaded', function() {
      const loadingScreen = document.querySelector('.loading-screen');
      const progressBar = document.querySelector('.loading-progress-bar');
      const loadingLogo = document.querySelector('.loading-logo');
      const loadingText = document.querySelector('.loading-text');
      
      // Animate logo in
      gsap.to(loadingLogo, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3
      });
      
      // Simulate loading progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          // Complete loading
          setTimeout(() => {
            // Animate out loading screen
            gsap.to(loadingScreen, {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                loadingScreen.classList.add('hidden');
                
                // Animate in main content
                gsap.from('nav, section, footer', {
                  y: 20,
                  opacity: 0,
                  duration: 0.6,
                  stagger: 0.1
                });
              }
            });
          }, 500);
        }
        
        progressBar.style.width = progress + '%';
      }, 200);
    });

    // Your existing JavaScript code for carousel, navbar, etc.
    const teamMembers = [
      // ... (your existing teamMembers array)
    ];
    
    // ... (the rest of your existing JavaScript code)