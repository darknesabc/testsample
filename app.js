const scriptURL = 'https://sheets.googleapis.com/v4/spreadsheets/199CxKW0EHGTVHMwDIEmNJ5LsOcPxyFUtQv52osl7jTY/values/Sheet1!A:N?key=AIzaSyDeS-WjQLmzG7yw1_GWu5Tw3HwFxG5hYbk';

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // 폼 제출 방지

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (number.length !== 4) {
        document.getElementById('loginMessage').textContent = "번호는 4자리를 입력해주세요.";
        return;
    }

    try {
        // Google Sheets 데이터 가져오기
        const response = await fetch(scriptURL);
        const data = await response.json();
        const rows = data.values;

        // 로그인 정보 매칭
        let loginSuccess = false;

        for (let i = 1; i < rows.length; i++) {  // 첫 번째 행은 헤더이므로 건너뜀
            const sheetName = rows[i][2];  // C열 (이름)
            const sheetNumber = rows[i][13];  // N열 (번호)

            // N열에서 마지막 4자리 추출
            const last4Digits = sheetNumber.slice(-4);

            if (sheetName === name && last4Digits === number) {
                loginSuccess = true;
                break;
            }
        }

        // 결과 출력
        if (loginSuccess) {
            document.getElementById('loginMessage').textContent = "로그인 성공!";
            // 성공 시 다음 페이지로 이동 또는 추가 동작 수행
        } else {
            document.getElementById('loginMessage').textContent = "이름 또는 번호가 잘못되었습니다.";
        }
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        document.getElementById('loginMessage').textContent = "오류가 발생했습니다. 다시 시도해주세요.";
    }
});
const scriptURL = 'https://sheets.googleapis.com/v4/spreadsheets/199CxKW0EHGTVHMwDIEmNJ5LsOcPxyFUtQv52osl7jTY/values/Sheet1!A:N?key=AIzaSyDeS-WjQLmzG7yw1_GWu5Tw3HwFxG5hYbk';

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // 폼 제출 방지

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (number.length !== 4) {
        document.getElementById('loginMessage').textContent = "번호는 4자리를 입력해주세요.";
        return;
    }

    try {
        // Google Sheets 데이터 가져오기
        const response = await fetch(scriptURL);
        const data = await response.json();
        const rows = data.values;

        // 로그인 정보 매칭
        let loginSuccess = false;

        for (let i = 1; i < rows.length; i++) {  // 첫 번째 행은 헤더이므로 건너뜀
            const sheetName = rows[i][2];  // C열 (이름)
            const sheetNumber = rows[i][13];  // N열 (번호)

            // N열에서 마지막 4자리 추출
            const last4Digits = sheetNumber.slice(-4);

            if (sheetName === name && last4Digits === number) {
                loginSuccess = true;
                break;
            }
        }

        // 결과 출력
        if (loginSuccess) {
            document.getElementById('loginMessage').textContent = "로그인 성공!";
            // 성공 시 다음 페이지로 이동 또는 추가 동작 수행
        } else {
            document.getElementById('loginMessage').textContent = "이름 또는 번호가 잘못되었습니다.";
        }
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        document.getElementById('loginMessage').textContent = "오류가 발생했습니다. 다시 시도해주세요.";
    }
});
