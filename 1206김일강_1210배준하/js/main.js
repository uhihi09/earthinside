// ====== 공지 팝업 닫기 기능 ======
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');
if (popup && closeBtn) {
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };
}

// ====== 로고 클릭 시 메인으로 이동 ======
function goHome() {
    window.location.href = 'main.html';
}

// ====== 히어로 이미지 클릭 시 확대/축소 (객체, 이벤트, 함수 활용) ======
const mainImg = document.getElementById('mainImg');
if (mainImg) {
    mainImg.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
}

// ====== 체크리스트 체크 시 강조 효과 ======
const checklistInputs = document.querySelectorAll('.checklist-box input[type="checkbox"]');
checklistInputs.forEach(input => {
    input.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.style.background = '#eaffea';
            this.parentElement.style.fontWeight = 'bold';
        } else {
            this.parentElement.style.background = '';
            this.parentElement.style.fontWeight = '';
        }
    });
});

// ====== 문의 폼 제출 시 안내 ======
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('문의가 정상적으로 접수되었습니다!');
        contactForm.reset();
    });
}

// DIY 이미지 클릭 시 플레이 버튼 애니메이션
const diyBox = document.querySelector('.diy-box');
const playBtn = document.querySelector('.play-btn');
if (diyBox && playBtn) {
    diyBox.addEventListener('click', function() {
        playBtn.style.background = '#2c5282';
        playBtn.style.transform = 'translate(-50%, -50%) scale(1.2)';
        setTimeout(() => {
            playBtn.style.background = 'rgba(44,82,130,0.7)';
            playBtn.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 400);
        alert('DIY 영상이 준비중입니다!');
    });
}



