document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();

    // 간단한 유효성 검사
    if (name && /^[0-9]{4}$/.test(number)) {
        // 로그인 성공 시
        localStorage.setItem('studentName', name); // 이름 저장
        window.location.href = 'dashboard.html'; // 다음 페이지로 이동
    } else {
        // 로그인 실패 시
        document.getElementById('error').innerText = '유효한 정보를 입력하세요.';
    }
});
