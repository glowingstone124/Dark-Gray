var nowSearch = 0;
var themesel;
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 0)
    themesel = localStorage.getItem('theme');
} else {
    themesel = localStorage.getItem('theme');
}
function switchEngine(engine) {
    var searchInput = document.getElementById('query');
    var googleBtn = document.getElementById('googleBtn');
    var bingBtn = document.getElementById('bingBtn');
    var baiduBtn = document.getElementById('baiduBtn');
    googleBtn.classList.remove('active');
    bingBtn.classList.remove('active');
    baiduBtn.classList.remove('active');
    
    switch (engine) {
        case 'Google':
            searchInput.placeholder = 'Search Google....';
            googleBtn.classList.add('active');
            nowSearch = 0;
            break;
        case 'Bing':
            searchInput.placeholder = 'Search Bing....';
            bingBtn.classList.add('active');
            nowSearch = 1;
            break;
        case 'Baidu':
            searchInput.placeholder = 'Search Baidu....';
            baiduBtn.classList.add('active');
            nowSearch = 2;
            break;
        default:
            searchInput.placeholder = 'Search....';
            break;
    }
}
function search(){
    var query = document.getElementById('query');
    if (query) {
    switch(nowSearch){
            case 0:
                window.open("https://www.google.com/search?q=" + query.value);
            case 1:
                window.open("https://www.bing.com/search?q=" + query.value);
            break;
            case 2:
                window.open("https://www.baidu.com/s?wd=" + query.value);
                break;
            default:
                console.error('NoSuchOpt')
        }
    }
}
function handleKeyDown(event) {
    if (event.key === 'Enter') {
      search();
    }
  }
function toggleTheme() {
    var body = document.body;
    var themeButton = document.querySelector(".themebtn img");
    var settingsButton = document.querySelector(".settingsbtn img");
    var weatherIcon = document.getElementById("weathericon");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeButton.src = "static/light.svg";
        settingsButton.src="static/settings.svg";
        weatherIcon.src="static/location.svg";
        setTheme(1)
    } else {
        body.classList.add("dark");
        themeButton.src = "static/dark.svg";
        settingsButton.src="static/settings_dark.svg"
        weatherIcon.src="static/location_dark.svg";
        setTheme(0)
    }
}
function setTheme(opt){
    var body = document.body;
    var themeButton = document.querySelector(".themebtn img");
    var settingsButton = document.querySelector(".settingsbtn img");
    var weatherIcon = document.getElementById("weathericon");
    localStorage.setItem('theme',opt);
    if (opt == 0){
        body.classList.add("dark");
        themeButton.src = "static/dark.svg";
        settingsButton.src="static/settings_dark.svg"
        weatherIcon.src="static/location_dark.svg";
    } else if(opt == 1){
        body.classList.remove("dark");
        themeButton.src = "static/light.svg";
        settingsButton.src="static/settings.svg";
        weatherIcon.src="static/location.svg";
    }
}
function settings() {
    const dialog = document.getElementById('settings');
    if (dialog) {
        dialog.showModal();
    }
}
setTheme( localStorage.getItem('theme'));