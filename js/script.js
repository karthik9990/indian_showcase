// Show the button when scrolling down 200px
        const scrollButton = document.getElementById("scrollUpBtn");

        window.onscroll = function () {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollButton.style.display = "block";
          } else {
            scrollButton.style.display = "none";
          }
        };

        // Scroll to top when button is clicked
        scrollButton.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });