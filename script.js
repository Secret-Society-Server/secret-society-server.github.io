async function switchTab(oldTab, newTab) {
    let oldT = document.getElementById(oldTab)
    let newT = document.getElementById(newTab);
    oldT.style.opacity = '0';
    setTimeout(function() {
        oldT.style.display = 'none';
        newT.style.display = 'block';
    }, 200)
    
    setTimeout(function() {
        newT.style.opacity = '1';
    }, 260)
}