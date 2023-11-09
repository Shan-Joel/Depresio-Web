document.addEventListener('DOMContentLoaded', function () {
   const menuToggle = document.getElementById('menuToggle');
   const menu = document.getElementById('menu');
   let menuActive = false;

   function toggleMenu() {
      //   menuActive = !menuActive;
      //   console.log('menuActive:', menuActive); // Log the value of menuActive
      //   if (menuActive) {
      //      console.log('Adding menu-active class');
      //      menu.classList.add('menu-active');
      //   } else {
      //      console.log('Removing menu-active class');
      //      menu.classList.remove('menu-active');
      //   }
      menu.classList.toggle('menu-active');
      menuToggle.classList.toggle('hamburger-active');
   }

   menuToggle.addEventListener('click', toggleMenu);

   // Optionally, close the menu when a menu item is clicked
   const menuItems = menu.querySelectorAll('a');
   menuItems.forEach((item) => {
      item.addEventListener('click', function () {
         toggleMenu(); // Close the menu when a menu item is clicked
      });
   });

   // Optionally, close the menu when the user clicks outside of the menu
   document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && menuActive) {
         toggleMenu();
      }
   });
});
