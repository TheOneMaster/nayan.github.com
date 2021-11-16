// Functions
function setTheme(themeName, opt){
    
    document.documentElement.classList.add('color-theme-in-transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('color-theme-in-transition');
        }, 1000);
    
    if (opt){
        document.documentElement.classList.add(themeName);
    } else {
        document.documentElement.classList.remove(themeName);
    }
    
}

function toggleTheme(){
    
    const mediaPref = window.matchMedia("(prefers-color-scheme: dark)");
    let mediaTheme = mediaPref.matches ? "light-theme" : "dark-theme";

    const slider = document.getElementById('theme-slider').checked;
    let theme_final = null;
    
    if (mediaTheme=='dark-theme'){
        theme_final = slider ? false: true;
    } else{
        theme_final = slider ? true: false;
    }

    setTheme(mediaTheme, theme_final);
}

// Event Listeners

// Change theme on Ctrl+Space Shortcut (for debugging purposes)
document.addEventListener('keydown', function(event){
    if (event.ctrlKey && event.key==' '){
        const theme = window.matchMedia("(prefers-color-scheme: dark)");

        if (theme.matches){
            setTheme('light-theme')
        } else{
            setTheme('dark-theme');
        }
           
    }
});



