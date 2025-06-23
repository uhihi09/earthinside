// 팝업 닫기 기능
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');
if (popup && closeBtn) {
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };
}

// 로고 클릭 시 메인으로 이동
function goHome() {
    window.location.href = 'main.html';
}

// 이미지 클릭 시 확대/축소 (객체, 이벤트, 함수 활용)
const mainImg = document.getElementById('mainImg');
if (mainImg) {
    mainImg.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
}

// 폼 제출 시 alert (이벤트, 함수)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        alert('문의가 정상적으로 접수되었습니다!');
        contactForm.reset();
    };
}



