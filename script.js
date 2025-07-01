document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }

    // 메뉴 항목 클릭 시 메뉴 닫기 (모바일 환경)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
            }
        });
    });

    // Swiper 초기화 (수정된 부분)
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1, // 기본적으로 1개의 슬라이드만 보임 (모바일)
        spaceBetween: 15, // 슬라이드 간의 간격 (픽셀)
        loop: true, // 무한 루프
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 반응형 설정: 화면 크기에 따라 보여지는 슬라이드 수 변경
        breakpoints: {
            // 481px 이상 (태블릿)
            481: {
                slidesPerView: 2, // 2개의 슬라이드
                spaceBetween: 15,
            },
            // 769px 이상 (중간 데스크탑)
            769: {
                slidesPerView: 3, // 3개의 슬라이드
                spaceBetween: 20,
            },
            // 1025px 이상 (대형 데스크탑)
            1025: {
                slidesPerView: 4, // 4개의 슬라이드
                spaceBetween: 20,
            }
        }
    });
});