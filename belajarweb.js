// Fungsi untuk menampilkan toast
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";
  
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000); // hilang setelah 3 detik
  }
  
  // Tambahkan event listener ke setiap tombol menu
  document.getElementById("homeLink").addEventListener("click", function (e) {
    e.preventDefault();
    showToast("Menuju ke halaman Home...");
    setTimeout(() => window.location.href = this.href, 1500);
  });
  
  document.getElementById("galeryLink").addEventListener("click", function (e) {
    e.preventDefault();
    showToast("Menuju ke halaman Galery...");
    setTimeout(() => window.location.href = this.href, 1500);
  });
  
  document.getElementById("blogLink").addEventListener("click", function (e) {
    e.preventDefault();
    showToast("Menuju ke halaman Blog...");
    setTimeout(() => window.location.href = this.href, 1500);
  });
  
  document.getElementById("contactLink").addEventListener("click", function (e) {
    e.preventDefault();
    showToast("Menuju ke halaman Contact...");
    setTimeout(() => window.location.href = this.href, 1500);
  });
 // Tambahkan proteksi agar script tidak error kalau elemen tidak ditemukan
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = message;
    toast.className = "show";
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }
  
  const links = [
    { id: "homeLink", message: "Menuju ke halaman Home..." },
    { id: "galeryLink", message: "Kamu sedang di halaman Galery!" },
    { id: "blogLink", message: "Menuju ke halaman Blog..." },
    { id: "contactLink", message: "Menuju ke halaman Contact..." }
  ];
  
  links.forEach(link => {
    const element = document.getElementById(link.id);
    if (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        showToast(link.message);
        setTimeout(() => window.location.href = this.href, 1500);
      });
    }
  });
  
  