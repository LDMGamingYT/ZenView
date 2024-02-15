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
	// update time every ms, since this isnt that heavy of a load.
	// needs testing, revert or slow down if it's too intensive.
	setInterval(updateTime, 1);
});
