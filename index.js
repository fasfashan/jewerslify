/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// SIDEBART CHART

const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

// Tampilkan Cart
cartButton.addEventListener("click", () => {
  cartSidebar.classList.remove("translate-x-full");
});
cartButton.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  sidecart.classList.remove("hidden");
});

// Sembunyikan Cart
closeCart.addEventListener("click", () => {
  cartSidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  sidecart.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const toggleButton = accordion.querySelector(".accordion-toggle");
    const content = accordion.querySelector(".accordion-content");

    // Set default state to closed
    content.style.maxHeight = "0";
    accordion.classList.remove("accordion-active");

    toggleButton.addEventListener("click", () => {
      const isActive = accordion.classList.contains("accordion-active");

      // Close all accordions
      accordions.forEach((otherAccordion) => {
        const otherContent = otherAccordion.querySelector(".accordion-content");
        otherContent.style.maxHeight = "0";
        otherAccordion.classList.remove("accordion-active");
      });

      // Toggle the clicked accordion
      if (!isActive) {
        accordion.classList.add("accordion-active");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove("accordion-active");
        content.style.maxHeight = "0";
      }
    });
  });
});
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Menghapus semua kelas aktif
    tabs.forEach((t) => t.classList.remove("border-b-2", "border-orange-600"));

    // Menambahkan kelas aktif ke tab yang diklik
    tab.classList.add("border-b-2", "border-orange-600");
  });
});
