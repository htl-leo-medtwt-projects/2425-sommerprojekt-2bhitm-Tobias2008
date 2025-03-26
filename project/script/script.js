let root = document.querySelector(':root');

function DarkWhiteMode() {
    root.style.setProperty('--color', '#f3e7ee');
    root.style.setProperty('--lighter-color', 'rgb(182, 182, 182)');
    root.style.setProperty('--primary-color', '#ae377d');
    root.style.setProperty('--secondary-color', '#761e53');
    root.style.setProperty('--accent-color', '#a31f6e');
    // root.style.setProperty('--background-image', 'linear-gradient(320deg, rgb(224, 155, 232) 0%, rgb(163, 102, 172) 50%, rgb(165, 72, 128) 100%)');
    // root.style.setProperty('--nav-gradient', 'linear-gradient(40deg, rgba(224, 155, 232, 1) 0%, rgba(163, 102, 172, 1) 50%, rgba(165, 72, 128, 1) 100%)');
    
    /*
    --nav-gradient: linear-gradient(40deg, rgba(128, 12, 143, 1) 0%, rgba(181, 41, 161, 1) 50%, rgba(224, 94, 171, 1) 100%);
    --transitions: 0.3s all ease-in-out;
    --font: 'NotoSans';
    --background-image: linear-gradient(320deg, rgb(231, 188, 236) 0%, rgb(241, 196, 247) 50%, rgb(230, 141, 194) 100%);

    --color: #12100f;
    --lighter-color: rgb(122, 122, 122);
    --primary-color: #c74f96;
    --secondary-color: #e188bd;
    --accent-color: #e05eab;
    */
}