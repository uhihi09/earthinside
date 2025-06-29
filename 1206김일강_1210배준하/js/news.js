/* ====== 지구인사이드 뉴스 & 트렌드 페이지 JavaScript ====== */

// ====== 뉴스 카드 호버 효과 ======
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.03)';
        this.style.boxShadow = '0 8px 32px #7fc97f33';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 18px rgba(44,82,130,0.10)';
    });
}); 