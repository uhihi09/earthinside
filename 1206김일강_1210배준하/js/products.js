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