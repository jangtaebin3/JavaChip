document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // 기본 제출 동작 중지
        
        
        const formData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            name: document.getElementById('name').value,
            nickname: document.getElementById('nickname').value,
            email: document.getElementById('email').value
        };

        
        fetch('/saveacc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // 저장 성공 시 Success 페이지로 이동
                window.location.href = '/auth/Success/Success.html';
            }
        })
        .catch(error => {
            console.error('에러 발생:', error);
        });
    });
});