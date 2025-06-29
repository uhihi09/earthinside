/* ====== 지구인사이드 리소스 센터 페이지 JavaScript ====== */

// ====== 기술 카드 호버 효과 ======
const techCards = document.querySelectorAll('.tech-card');

techCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.filter = 'grayscale(0%)';
            img.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.filter = 'grayscale(30%)';
            img.style.transform = 'scale(1)';
        }
    });
}); 