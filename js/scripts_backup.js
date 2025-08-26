document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.getElementById('typewriter');
    const text = 'Shovan';
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        }
    }

    type();
});