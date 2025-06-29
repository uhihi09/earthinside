/* ====== 지구인사이드 메인 페이지 JavaScript ====== */

// ====== 팝업 기능 ======
/**
 * 팝업 창을 열는 함수
 * 화면 중앙에 팝업을 위치시키고 팝업 차단 시 알림 표시
 */
function openPopup() {
    // 화면 중앙에 팝업 위치 계산
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const popupWidth = 500;
    const popupHeight = 400;
    const b_left = (screenWidth - popupWidth) / 2;
    const b_top = (screenHeight - popupHeight) / 2;
    
    // 팝업 창 열기
    let newWin = window.open("popup.html", "", `width=${popupWidth}, height=${popupHeight}, left=${b_left}, top=${b_top}`);
    
    // 팝업 차단 시 알림
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.");
    }
}

// ====== 공지사항 팝업 닫기 기능 ======
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

// ====== 히어로 이미지 클릭 시 확대/축소 효과 ======
const mainImg = document.getElementById('mainImg');
if (mainImg) {
    mainImg.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
}

// ====== 체크리스트 및 유튜브 영상 연결 기능 ======
const checklistInputs = document.querySelectorAll('.checklist-box input[type="checkbox"]');

// 유튜브 영상 링크 설정
const youtubeLinks = {
    0: "https://youtu.be/pFfuBL3PM8Q?si=zCJhghVFqlMihk5K", // 초보자를 위한 단계별 시작 방법
    1: "https://youtu.be/Ijpyqcu7ZFA?si=PqFjDMkBqh42kbM-", // 생활 공간별 실천법
    2: "https://youtu.be/qAHN7xFQnFM?si=WgWyNZLz-TZkA4-K", // 계절별/상황별 맞춤 팁
    3: "https://youtu.be/JoE-wj0c2c8?si=BpFfhDeDLoSXCrQj"  // 천연재료 DIY 제작법
};

/**
 * 유튜브 링크를 임베드 링크로 변환하는 함수
 * @param {string} youtubeUrl - 유튜브 URL
 * @returns {string} 임베드 URL
 */
function getEmbedUrl(youtubeUrl) {
    const videoId = youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId[1]}`;
    }
    return youtubeUrl;
}

/**
 * 영상을 표시하는 함수
 * @param {number} index - 체크박스 인덱스
 */
function showVideo(index) {
    const videoContainer = document.getElementById('video-container');
    const embedUrl = getEmbedUrl(youtubeLinks[index]);
    
    videoContainer.innerHTML = `
        <iframe 
            width="100%" 
            height="315" 
            src="${embedUrl}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    `;
}

/**
 * 원래 이미지로 복원하는 함수
 */
function showOriginalImage() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <img src="../images/diy.jpg" alt="DIY 이미지" class="diy-img" id="diy-img">
        <div class="play-btn" id="play-btn">▶</div>
    `;
}

// 체크박스 이벤트 리스너 설정
checklistInputs.forEach((input, index) => {
    input.addEventListener('change', function() {
        // 다른 체크박스들 해제 (라디오 버튼처럼 동작)
        checklistInputs.forEach((otherInput, otherIndex) => {
            if (otherIndex !== index) {
                otherInput.checked = false;
                otherInput.parentElement.style.background = '';
                otherInput.parentElement.style.fontWeight = '';
            }
        });

        // 항상 체크된 상태 유지 (해제 방지)
        if (!this.checked) {
            this.checked = true;
            return;
        }

        // 선택된 체크박스 강조 효과
        this.parentElement.style.background = '#eaffea';
        this.parentElement.style.fontWeight = 'bold';
        
        // 영상을 diy-box에 임베드
        showVideo(index);
    });
});

// ====== 페이지 로드 시 초기화 ======
document.addEventListener('DOMContentLoaded', function() {
    // 첫 번째 체크박스가 체크되어 있으면 해당 영상 표시
    const firstCheckbox = checklistInputs[0];
    if (firstCheckbox && firstCheckbox.checked) {
        firstCheckbox.parentElement.style.background = '#eaffea';
        firstCheckbox.parentElement.style.fontWeight = 'bold';
        showVideo(0);
    }
});

// ====== 문의 폼 제출 처리 ======
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('문의가 정상적으로 접수되었습니다!');
        contactForm.reset();
    });
}

// ====== DIY 이미지 클릭 시 플레이 버튼 애니메이션 ======
document.addEventListener('click', function(e) {
    if (e.target.closest('.diy-box') && !e.target.closest('#video-container iframe')) {
        const playBtn = document.querySelector('#play-btn');
        if (playBtn) {
            // 플레이 버튼 애니메이션 효과
            playBtn.style.background = '#2c5282';
            playBtn.style.transform = 'translate(-50%, -50%) scale(1.2)';
            
            setTimeout(() => {
                playBtn.style.background = 'rgba(44,82,130,0.7)';
                playBtn.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 400);
            
            alert('DIY 영상이 준비중입니다!');
        }
    }
});



