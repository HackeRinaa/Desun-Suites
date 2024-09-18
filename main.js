// Toggle the side navigation
function openMenu() {
    var sideNav = document.getElementById("sideNav");
    var mainContent = document.getElementById("mainContent");
    var logos = document.querySelectorAll("#logo");
    var menu = document.getElementById("menuIcon");
  
    // Open the side navigation
    sideNav.style.width = "250px";
    mainContent.style.marginLeft = "250px";
    logos.forEach(logo => {
        if (logo.classList.contains('show')) {
            logo.style.marginLeft = "250px";
        }
    })

    
    // Hide the menu bars icon when the nav is open
    menu.style.display = "none";
  }
  
  function closeMenu() {
    var sideNav = document.getElementById("sideNav");
    var mainContent = document.getElementById("mainContent");
    var logos = document.querySelectorAll("#logo");
    var menu = document.getElementById("menuIcon");
  
    // Close the side navigation
    sideNav.style.width = "0";
    mainContent.style.marginLeft = "0";
    logos.forEach(logo => {
        if (logo.classList.contains('show')) {
            logo.style.marginLeft = "0";
        }
    });
    
    
    // Show the menu bars icon when the nav is closed
    menu.style.display = "block";
  }


// Initialize flags to track whether the actions have occurred
let hasScrolled = false;
let hasAddedLogoClasses = false;

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const menu = document.getElementById('menuIcon');
    const heroSection = document.getElementById('hero');
    const heroSectionHeight = heroSection.offsetHeight;
    var scrollPosition = window.scrollY;
    const logos = document.querySelectorAll('#logo');
    const languageButtons = document.querySelectorAll('.language-btn')

    // Check if scroll position is at least half of the hero section height
    if (scrollPosition >= heroSectionHeight / 2) {
        if (!hasScrolled) {
            // Add the 'scrolled' class to the navbar
            navbar.classList.add('scrolled');
            menu.style.color = 'black';
            languageButtons.forEach(btn => {
                if (!btn.classList.contains('active')) {
                    btn.style.color = 'black';
                }
            })

            // Only add or remove classes from logos once
            if (!hasAddedLogoClasses) {
                logos.forEach(logo => {
                    console.log(logo);
                    if (logo.classList.contains('show')) {
                        logo.classList.remove('show');
                    } else {
                        logo.classList.add('show');
                    }
                });
                hasAddedLogoClasses = true;
            }

            // Set the flag to prevent further additions
            hasScrolled = true;
        }
    } else if (scrollPosition < heroSectionHeight / 2){
        if (hasScrolled) {
            // Remove the 'scrolled' class from the navbar
            navbar.classList.remove('scrolled');
            menu.style.color = 'white';
            languageButtons.forEach(btn => {
                if (!btn.classList.contains('active')) {
                    btn.style.color = 'white';
                }
            })


            // Reset the flags to allow actions if needed later
            hasScrolled = false;
            hasAddedLogoClasses = false; // Optional: Reset if you want to allow re-adding classes later

                        // Only add or remove classes from logos once
                        if (!hasAddedLogoClasses) {
                            logos.forEach(logo => {
                                console.log(logo);
                                if (logo.classList.contains('show')) {
                                    logo.classList.remove('show');
                                } else {
                                    logo.classList.add('show');
                                }
                            });
                            hasAddedLogoClasses = true;
                        }
        }
    }
});
