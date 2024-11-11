document.querySelector(".show").addEventListener("click", function() {
  const navUl = document.getElementById("nav-list");
  const hide = document.querySelector(".hide");
  
  this.classList.add("active");
  navUl.classList.add("active");
  hide.classList.add("active");
});

document.querySelector(".hide").addEventListener("click", function() {
  const navUl = document.getElementById("nav-list");
  const show = document.querySelector(".show");
  
  this.classList.remove("active");
  navUl.classList.remove("active");
  show.classList.remove("active");
});

// untuk setiap baris A yang berada di Nav Ul Li (A)

const links = document.querySelectorAll('a');
const hide = document.querySelector(".hide");
const navUl = document.getElementById("nav-list");
const show = document.querySelector(".show");

  links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(item => item.classList.remove('active'));

      this.classList.add('active');
      // menambahkan active setiap click salah satu navigasi
      hide.classList.add("active");
      navUl.classList.add("active");
      show.classList.add("active");
    });
  });
