
      const slider = document.querySelector(".slider");
      let index = 0;

      function showSlide() {
        index = (index + 1) % slider.children.length;
        const slideWidth = slider.children[0].clientWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
      }

      setInterval(showSlide, 3000); 
 
