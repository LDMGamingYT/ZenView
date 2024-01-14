// Copyright (c) 2024 Logan Dhillo

function updateTime() {
	var currentTime = new Date();
	document.getElementById('seconds').textContent = ('0' + currentTime.getSeconds()).slice(-2);
	document.getElementById('minutes').textContent = ('0' + currentTime.getMinutes()).slice(-2);
	document.getElementById('hours').textContent = currentTime.getHours();
}

addEventListener("DOMContentLoaded", function() {
	// Update time every 500 ms: 500 ms allows it to correct itself if the cycle is not synced with the clock
	setInterval(updateTime, 500);
});