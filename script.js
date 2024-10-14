document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    const errorElement = document.getElementById('error');

    // 마스터 계정 확인 (예: username: "admin", password: "admin123")
    if (name === 'admin' && number === '1234') {
        window.location.href = 'admin-dashboard.html'; // 관리자 대시보드로 리디렉션
        return;
    }

    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/199CxKW0EHGTVHMwDIEmNJ5LsOcPxyFUtQv52osl7jTY/values/명렬!A:N?key=AIzaSyDeS-WjQLmzG7yw1_GWu5Tw3HwFxG5hYbk`);
        const data = await response.json();
        const rows = data.values || [];
        
        let matched = false;

        // 이름과 번호가 매칭되는지 확인
        for (const row of rows) {
            const sheetName = row[2]; // 이름 (C열)
            const sheetNumber = row[13]; // 번호 (N열)

            // N열의 오른쪽 4자리 확인
            const rightmostFourDigits = sheetNumber.slice(-4);

            console.log(`Checking: ${sheetName} (input: ${name}), ${rightmostFourDigits} (input: ${number})`); // 디버깅 메시지

            if (sheetName === name && rightmostFourDigits === number) {
                matched = true;
                break;
            }
        }

        if (matched) {
            // 로그인 성공 후 student-dashboard.html로 리디렉션
            window.location.href = 'student-dashboard.html';
        } else {
            errorElement.textContent = "이름과 번호가 일치하지 않습니다.";
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        errorElement.textContent = "데이터를 불러오는 중 오류가 발생했습니다.";
    }
});
