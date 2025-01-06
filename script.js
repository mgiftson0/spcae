// Device detection function
function isMobileDevice() {
  return (window.innerWidth <= 768) || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect or show message for mobile users
if (isMobileDevice()) {

  // Option 2: Show message and hide content
  document.body.innerHTML = `
      <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          z-index: 9999;
      ">
          <div>
              <h1>Desktop Only</h1>
              <p>This site is only accessible on desktop devices. Please visit us using a desktop computer.</p>
          </div>
      </div>
  `;
} else {
  // Original scroll behavior code for desktop
  let lastScrollTop = 0;
  const header = document.querySelector("header");
  const toTop = document.querySelector(".to-top");
  const heroSection = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const heroSectionOffsetTop = heroSection.offsetTop;

      if (scrollTop > heroSectionOffsetTop) {
          toTop.classList.add("active");
      } else {
          toTop.classList.remove("active");
      }

      if (scrollTop > lastScrollTop) {
          header.classList.add("hidden");
      } else {
          header.classList.remove("hidden");
      }

      lastScrollTop = scrollTop;
  });
}