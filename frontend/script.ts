const adminButton = document.getElementById('adminButton') as HTMLButtonElement;
const userButton = document.getElementById('userButton') as HTMLButtonElement;
if (adminButton) {
    adminButton.addEventListener('click', () => {
        window.location.href = 'admin/admin-index.html'; 
    });
}

if (userButton) {
    userButton.addEventListener('click', () => {
        window.location.href = 'customer/index.html';
    });
}