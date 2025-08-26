document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    const text = 'Shovan';
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});