function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('digitalClock').textContent = timeString;

    // Generate random RGB color values
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('digitalClock').style.color = color;
}

setInterval(updateClock, 1000); // Update clock every second
updateClock(); // Initial call to display clock immediately