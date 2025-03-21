document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate login
    if (username === 'Pratik' && password === '241601') {
        // Redirect to video page
        window.location.href = 'video.html';  
    } else {
        document.getElementById('errorMsg').innerText = 'Invalid username or password!';
    }
});

// Video Upload and Display Logic
document.getElementById('videoInput')?.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const videoPlayer = document.getElementById('videoPlayer');
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        document.getElementById('fileName').innerText = Uploaded: ${file.name};
    }
});