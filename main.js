// Navbar slide-in
gsap.to(".navbar", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
  
  // Button pulse
  gsap.to(".cta-btn", {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });
  
  // Scroll-triggered fade-ins
  gsap.utils.toArray(".fade-section").forEach(section => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });
  });