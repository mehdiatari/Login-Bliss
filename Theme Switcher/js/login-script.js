let currentTheme = 1;

function changeTheme() {
    currentTheme = (currentTheme % 2) + 1;
    document.body.className = "theme" + currentTheme;
}
