document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 이벤트 방지

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    // 구글 시트 API URL
    const sheetId = '199CxKW0EHGTVHMwDIEmNJ5LsOcPxyFUtQv52osl7jTY'; // 시트 ID
    const apiKey = 'AIzaSyDeS-WjQLmzG7yw1_GWu5Tw3HwFxG5hYbk'; // API 키
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/명렬!A:N?key=${apiKey}`;

    // Fetch 구글 시트 데이터
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values; // 시트에서 가져온 데이터
            let matchedData = null;

            if (rows) {
                for (let row of rows) {
                    // C열과 N열에서 각각 이름과 번호를 확인
                    if (row[2] === name && row[13] === number) {
                        matchedData = {
                            자리번호: row[0],
                            담임: row[1],
                            이름: row[2],
                            학번: row[3],
                            반: row[4],
                            성별: row[5],
                            학교: row[6],
                            학년: row[7],
                            국어: row[8],
                            수학: row[9],
                            탐구1: row[10],
                            탐구2: row[11],
                            학생연락처: row[12],
                            학부모연락처: row[13],
                        };
                        break;
                    }
                }
            }

            const errorElement = document.getElementById('error');
            if (matchedData) {
                // 로그인 성공 시 localStorage에 데이터 저장
                localStorage.setItem('userData', JSON.stringify(matchedData));
                errorElement.textContent = '로그인 성공!';
                errorElement.classList.remove('error');

                // 로그인 후 다른 페이지로 리다이렉트
                window.location.href = '다른페이지.html'; // 다른 페이지로 이동
            } else {
                errorElement.textContent = '이름 또는 번호가 일치하지 않습니다.';
                errorElement.classList.add('error');
            }
        })
        .catch(error => {
            console.error('Error fetching data from Google Sheets:', error);
            const errorElement = document.getElementById('error');
            errorElement.textContent = '데이터를 가져오는 중 오류가 발생했습니다.';
            errorElement.classList.add('error');
        });
});

// 로그아웃 버튼 이벤트
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('userData'); // 데이터 초기화
    document.getElementById('error').textContent = '로그아웃되었습니다.';
    document.getElementById('error').classList.remove('error');
});
