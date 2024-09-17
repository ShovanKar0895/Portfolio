// document.addEventListener("DOMContentLoaded", function() {
//     const typewriter = document.getElementById('typewriter');
//     const text = "Shovan"; // Replace with the text you want to animate
//     let index = 0;

//     function type() {
//         if (index < text.length) {
//             typewriter.textContent += text.charAt(index);
//             index++;
//             setTimeout(type, 100); // Adjust typing speed here
//         }
//     }

//     type();

//     const skillItems = document.querySelectorAll('.skill-item');
//     const icons = document.querySelectorAll('.tech-icons img');
    
//     skillItems.forEach(item => {
//         item.addEventListener('mouseenter', function() {
//             const targetId = item.getAttribute('data-target');
//             const targetIcon = document.getElementById(targetId);
//             targetIcon.style.transform = 'scale(1.1)';
//         });
        
//         item.addEventListener('mouseleave', function() {
//             const targetId = item.getAttribute('data-target');
//             const targetIcon = document.getElementById(targetId);
//             targetIcon.style.transform = 'scale(1)';
//         });
//     });
// });


