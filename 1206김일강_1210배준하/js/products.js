/* ====== 지구인사이드 제품 & 브랜드 페이지 JavaScript ====== */

// ====== 제품 카드 호버 효과 ======
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.03)';
        this.style.boxShadow = '0 8px 32px #7fc97f33';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 18px rgba(44,82,130,0.10)';
    });
});

// 별점 마우스오버 효과(예시)
const stars = document.querySelectorAll('.product-rating .star');
stars.forEach(star => {
    star.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    star.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});