const navigation = document.querySelector('.nav');
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');

document.addEventListener('alpine:init', () => {
  Alpine.data('mobileNavBar', () => ({
    active: false,

    toggle() {
      this.active = !this.active;

      this.scaleNavContainer();
    },

    scaleNavContainer() {
      const navContainer = document.querySelector('.nav-container');

      console.log(this.active ? 'Active!' : 'Inactive!');

      if (this.active) {
        setTimeout(() => {
          navContainer.style.width = '100%';
        }, 100);
      } else {
        navContainer.style.width = '0';
      }
    }
  }));

  Alpine.data('desktopHeader', () => ({
    init() {
      var prevScrollPos = window.scrollY;

      window.addEventListener('scroll', function () {
        let currentScrollPos = window.scrollY;
        const navBarBtn = document.querySelector('.nav-bar-btn');

        console.log('Prev pos', prevScrollPos, 'Current pos', currentScrollPos);

        if (currentScrollPos >= 30) {
          // Hide navbar when user scrolls down
          navigation.style.top = "-200px";

          // Show navbar button
          navBarBtn.style.display = 'inline-flex';
          navBarBtn.style.left = '24px';

          // navBarBtn.classList.remove('hidden');
          // navBarBtn.classList.add('inline-flex');
        } else {
          // Show navbar if the viewport is at the top of the page
          navigation.style.top = "0";

          // Hide navbar button
          // navBarBtn.style.display = 'none';
          if (window.innerWidth >= 768) {
            navBarBtn.style.left = '-100px';
          }
        }

      });
    },
  }));
});