// ./js/portfolio-swiper.js

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // 한 번에 하나의 슬라이드(페이지) 표시 (각 슬라이드 안에 4개의 이미지가 들어있음)
        spaceBetween: 30, // 슬라이드(페이지) 간 간격
        loop: true, // 무한 루프
        autoplay: {
            delay: 4000, // 4초마다 자동 슬라이드(페이지) 전환
            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        },
        pagination: {
            el: ".swiper-pagination", // 페이지네이션 요소
            clickable: true, // 점 클릭 시 해당 슬라이드(페이지)로 이동
        },
        navigation: {
            nextEl: ".swiper-button-next", // 다음 버튼 요소
            prevEl: ".swiper-button-prev", // 이전 버튼 요소
        },
        // 반응형 설정: 모든 해상도에서 한 페이지에 4장의 사진을 보여주기 위한 설정
        breakpoints: {
            // 데스크탑 (1024px 이상)
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            // 태블릿 (768px 이상)
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            // 모바일 (작은 화면에서는 한 페이지에 2장 또는 1장씩 보이도록 설정)
            320: {
                slidesPerView: 1, // 여전히 한 "슬라이드"만 보이지만, 그 슬라이드 안의 이미지는 반응형으로 조절
                spaceBetween: 20,
            },
        },
    });
});