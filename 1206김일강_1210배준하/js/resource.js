// 이 페이지에서는 특별한 동작이 필요하지 않으므로 비워둡니다.
// 추후 인터랙션이 필요할 경우 여기에 코드를 추가할 수 있습니다.

// 리소스 카드 hover 효과(예시)
const resourceCards = document.querySelectorAll('.resource-card');
resourceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 32px #7fc97f55';
    });
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
}); 