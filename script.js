



// Tangkap tombol "ABOUT" dan elemen tujuan
const pbtn = document.getElementById('nav-a'  );
const pSection = document.getElementById('sec-2' );

// Tambahkan event listener untuk klik
pbtn.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default link
 pSection.scrollIntoView({
    behavior: 'smooth', // Gulir dengan animasi halus
    block: 'start'      // Posisi elemen pada layar
  });
});



// Tangkap tombol "ABOUT" dan elemen tujuan
const nav = document.getElementById('nav-p'  );
const sec = document.getElementById('sec-3' );

// Tambahkan event listener untuk klik
nav.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default link
 sec.scrollIntoView({
    behavior: 'smooth', // Gulir dengan animasi halus
    block: 'start'      // Posisi elemen pada layar
  });
});


// Tangkap tombol "ABOUT" dan elemen tujuan
const nav1 = document.getElementById('nav-s'  );
const sec1 = document.getElementById('sec-4' );

// Tambahkan event listener untuk klik
nav1.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default link
 sec1.scrollIntoView({
    behavior: 'smooth', // Gulir dengan animasi halus
    block: 'start'      // Posisi elemen pada layar
  });
});


// Tangkap tombol "ABOUT" dan elemen tujuan
const nav2 = document.getElementById('nav-c'  );
const sec2 = document.getElementById('footer-container' );

// Tambahkan event listener untuk klik
nav2.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah perilaku default link
 sec2.scrollIntoView({
    behavior: 'smooth', // Gulir dengan animasi halus
    block: 'start'      // Posisi elemen pada layar
  });
});

