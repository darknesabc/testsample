document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    const userType = document.querySelector('input[name="userType"]:checked').value; // 선택된 로그인 유형

    // 마스터 계정 정보
    const masterAccount = {
        name: "admin",
        number: "1234"
    };

    // 로그인 처리
    if (userType === "admin" && name === masterAccount.name && number === masterAccount.number) {
        // 관리자 로그인 성공 시
        window.location.href = 'admin-dashboard.html'; // 관리자 대시보드로 이동
    } else if (userType === "student" && name && /^[0-9]{4}$/.test(number)) {
        // 학생 로그인 성공 시
        localStorage.setItem('studentName', name); // 이름 저장
        window.location.href = 'student-dashboard.html'; // 학생 대시보드로 이동
    } else {
        // 로그인 실패 시
        document.getElementById('error').innerText = '유효한 정보를 입력하세요.';
    }
});
