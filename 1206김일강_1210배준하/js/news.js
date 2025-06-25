// 뉴스 이미지 hover 효과(예시)
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 32px #7fc97f55';
    });
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
}); 