// simple-emoji.js - Efek paling sederhana
document.addEventListener('DOMContentLoaded', function() {
    // Emoji pool
    const emojis = ['💖', '😻', '💕', '💗', '❤️', '😍'];
    
    // Saat klik di mana saja
    document.addEventListener('click', function(e) {
        // Buat 3 emoji
        for (let i = 0; i < 3; i++) {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Styling
            emoji.style.cssText = `
                position: fixed;
                font-size: 30px;
                left: ${e.clientX + (Math.random() * 50 - 25)}px;
                top: ${e.clientY}px;
                z-index: 9999;
                pointer-events: none;
                user-select: none;
                text-shadow: 0 0 10px pink;
                animation: floatUp 2s forwards;
            `;
            
            // Tambah ke body
            document.body.appendChild(emoji);
            
            // Hapus setelah animasi selesai
            setTimeout(() => {
                if (emoji.parentNode) {
                    emoji.parentNode.removeChild(emoji);
                }
            }, 2000);
        }
    });
    
    // Tambah keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(0.5);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('✨ Simple Emoji Effect Ready!');
});