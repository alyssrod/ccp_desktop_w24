document.addEventListener('DOMContentLoaded', function() {
    function typeWriter(elementId, text, speed) {
        const element = document.getElementById(elementId);
        if (element) { // Only proceed if the element exists
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
    }

    typeWriter('typewriter-text-index', 'Welcome to My Homepage!', 100);
    typeWriter('typewriter-text-pets', 'Discover Our Furry Friends!', 100);
    typeWriter('typewriter-text-recipes', 'Explore Delicious Recipes!', 100);
    typeWriter('typewriter-text-travel', 'Join Our Travel Adventures!', 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.setAttribute('class', 'dark-mode');
        } else {
            document.body.setAttribute('class', 'light-mode');
        }
});
