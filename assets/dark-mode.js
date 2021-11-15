document.addEventListener('keydown', function(event){
    if (event.ctrlKey && event.key==' '){
        const theme = window.matchMedia("(prefers-color-scheme: dark)");

        if (theme.matches){
            document.documentElement.classList.toggle('light-theme')
        } else{
            document.documentElement.classList.toggle('dark-theme');
        }     
    }
});