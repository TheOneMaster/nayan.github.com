document.addEventListener('keydown', function(event){
    if (event.ctrlKey && event.key==' '){
        const theme = window.matchMedia("(prefers-color-scheme: dark)");
        
        document.documentElement.classList.add('color-theme-in-transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('color-theme-in-transition');
        }, 1000);

        if (theme.matches){
            document.documentElement.classList.toggle('light-theme')
        } else{
            document.documentElement.classList.toggle('dark-theme');
        }
           
    }
});


