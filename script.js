
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const smtpForm = document.getElementById('smtpForm');
    const mailForm = document.getElementById('mailForm');
    const sentMailsList = document.getElementById('sentMailsList');
    
    let smtpConfig = {};
    let loggedIn = false;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
      
        console.log('Logged in with email:', email);
        loggedIn = true;
        alert('Logged in successfully!');
    });

    smtpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        smtpConfig = {
            server: document.getElementById('smtpServer').value,
            port: document.getElementById('smtpPort').value,
            user: document.getElementById('smtpUser').value,
            pass: document.getElementById('smtpPass').value
        };
    
        console.log('SMTP Config saved:', smtpConfig);
        alert('SMTP Configuration saved successfully!');
    });

    mailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!loggedIn) {
            alert('Please log in first.');
            return;
        }
        if (Object.keys(smtpConfig).length === 0) {
            alert('Please configure SMTP settings first.');
            return;
        }

        const to = document.getElementById('to').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log('Sending email to:', to);
        console.log('Subject:', subject);
        console.log('Message:', message);
        
        const emailItem = document.createElement('li');
        emailItem.innerHTML = `
            <strong>To:</strong> ${to}<br>
            <strong>Subject:</strong> ${subject}<br>
            <strong>Message:</strong> ${message}
        `;
        sentMailsList.appendChild(emailItem);
        
        alert('Email sent successfully!');
        mailForm.reset();
    });
});
