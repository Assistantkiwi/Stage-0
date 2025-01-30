function updateTime() {
    const now = new Date();
    const timeString = now.toUTCString();
    document.getElementById('currentTime').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

