// Functions
function setTheme(themeName, opt){
    
    document.documentElement.classList.add('color-theme-in-transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('color-theme-in-transition');
        }, 1000);

    document.documentElement.setAttribute("data-theme", themeName);
}

function toggleTheme(){
    
    let themeVal = document.documentElement.getAttribute("data-theme");
    themeVal = themeVal === 'dark' ? 'light': 'dark';

    setTheme(themeVal, null);
}


