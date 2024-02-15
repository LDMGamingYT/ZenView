// Copyright (c) 2024 Logan Dhillon

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateTime() {
	const currentTime = new Date();

	document.getElementById('date').textContent = `${daysOfWeek[currentTime.getDay()]}, ${currentTime.toLocaleString('en-us', { month: 'long' })} ${currentTime.getDate()}, ${currentTime.getFullYear()}`;

	document.getElementById('hours').textContent  = (currentTime.getHours() % 12) || 12;
}

function updateMinutes() {
	document.getElementById('minutes').textContent = ('0' + new Date().getMinutes()).slice(-2);
}

function updateSeconds() {
	document.getElementById('seconds').textContent = ('0' + new Date().getSeconds()).slice(-2);
}

addEventListener("DOMContentLoaded", function() {
	// run everything once since setInterval's first execution is after the first interval passes
	updateTime();
	updateMinutes();
	updateSeconds();

	// update time every 1s
	setInterval(updateTime, 1000);
	// mins and secs are updated more frequently sicne they change more often
	setInterval(updateMinutes, 500);
	setInterval(updateSeconds, 100);
});
