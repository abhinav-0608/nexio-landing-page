// Minimal JavaScript for logo fallback if image fails to load
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    
    // Fallback: If logo image fails to load, show text logo
    logo.addEventListener('error', () => {
        logo.style.display = 'none';
        const textLogo = document.createElement('div');
        textLogo.className = 'text-logo';
        textLogo.textContent = 'NEXIO';
        textLogo.style.cssText = `
            font-size: 32px;
            font-weight: 300;
            letter-spacing: 8px;
            color: #E5E5E5;
            opacity: 0;
            animation: fadeIn 1.5s ease-in-out 0.3s forwards;
        `;
        logo.parentElement.appendChild(textLogo);
    });
});
