<script>
        function toggleMenu() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('active');
        }

        // Menutup menu jika klik di luar navbar
        document.addEventListener('click', function(event) {
            const navbar = document.getElementById('navbar');
            const menuButton = document.getElementById('menuBtn');

            // Jika klik di luar tombol menu dan navbar
            if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
                navbar.classList.remove('active');
            }
        });

        let slideIndex = 0;

        function moveSlide(n) {
            const slides = document.querySelector('.slider');
            const totalSlides = document.querySelectorAll('.slide').length;
            slideIndex = (slideIndex + n + totalSlides) % totalSlides;
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        function moveSlide2(n) {
            const slides = document.querySelector('.slider2');
            const totalSlides = document.querySelectorAll('.slide2').length;
            slideIndex = (slideIndex + n + totalSlides) % totalSlides;
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        function moveSlide3(n) {
            const slides = document.querySelector('.slider3');
            const totalSlides = document.querySelectorAll('.slide3').length;
            slideIndex = (slideIndex + n + totalSlides) % totalSlides;
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        // Dragging container
        const container = document.getElementById('container');
        let offsetX = 0, offsetY = 0, isDragging = false;

        // Untuk mouse
        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - container.getBoundingClientRect().left;
            offsetY = e.clientY - container.getBoundingClientRect().top;
            container.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            container.style.left = `${e.clientX - offsetX}px`;
            container.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            container.style.cursor = 'grab';
        });

        // Untuk touchscreen
        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            const touch = e.touches[0];
            offsetX = touch.clientX - container.getBoundingClientRect().left;
            offsetY = touch.clientY - container.getBoundingClientRect().top;
            container.style.cursor = 'grabbing';
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            container.style.left = `${touch.clientX - offsetX}px`;
            container.style.top = `${touch.clientY - offsetY}px`;
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
            container.style.cursor = 'grab';
        });

        // Loading screen
        function showLoading(event) {
            event.preventDefault(); // Biar ga langsung pindah halaman
            const targetUrl = event.currentTarget.getAttribute('href'); // Dapatkan link tujuan

            // Tampilkan loading screen
            document.getElementById('loading-screen').style.display = 'flex';

            // Pindah halaman setelah animasi loading (misal 3 detik)
            setTimeout(() => {
                window.location.href = targetUrl; // Arahkan ke halaman tujuan
            }, 1500); // 3 detik
        }
    </script>