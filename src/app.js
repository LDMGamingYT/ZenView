// Copyright (c) 2024 Logan Dhillon

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateTime() {
	var currentTime = new Date();

	var month = currentTime.toLocaleString('en-us', { month: 'long' });

	document.getElementById('date').textContent = `${daysOfWeek[currentTime.getDay()]}, ${month} ${currentTime.getDate()}, ${currentTime.getFullYear()}`;

	document.getElementById('seconds').textContent = ('0' + currentTime.getSeconds()).slice(-2);
	document.getElementById('minutes').textContent = ('0' + currentTime.getMinutes()).slice(-2);
	document.getElementById('hours').textContent  = (currentTime.getHours() % 12) || 12;
}

addEventListener("DOMContentLoaded", function() {
	// Update time every 500 ms: 500 ms allows it to correct itself if the cycle is not synced with the clock
	setInterval(updateTime, 500);
});