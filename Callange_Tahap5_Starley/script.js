document.addEventListener("DOMContentLoaded", function () {
    // Tombol Lihat Menu Lainnya
    const tombolMenuLain = document.querySelector("#tombol-menu-lain");
    const menuTersembunyi = document.querySelectorAll(".sembunyi");

    if (tombolMenuLain) {
        tombolMenuLain.addEventListener("click", function () {
            menuTersembunyi.forEach(function (kartu) {
                kartu.classList.remove("sembunyi");
            });
            tombolMenuLain.style.display = "none";
        });
    }

    // Navigasi Hamburger Mobile
    const hamburger = document.querySelector("#hamburger");
    const navLinks = document.querySelector("#nav-links");

    if (hamburger && navLinks) {
        const tutupMenu = () => {
            navLinks.classList.remove("aktif");
            hamburger.classList.remove("aktif");
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Buka menu navigasi");
        };

        hamburger.addEventListener("click", function () {
            const menuTerbuka = navLinks.classList.toggle("aktif");
            hamburger.classList.toggle("aktif", menuTerbuka);
            hamburger.setAttribute("aria-expanded", String(menuTerbuka));
            hamburger.setAttribute(
                "aria-label",
                menuTerbuka ? "Tutup menu navigasi" : "Buka menu navigasi"
            );
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", tutupMenu);
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                tutupMenu();
            }
        });
    }
});