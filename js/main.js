var SchedTime = function(day, start, duration, column) {
	this.day = day;
	this.start = start;
	this.duration = duration;
	this.column = (typeof column === "undefined") ? 0 : column;
};

// String Constants for Days in Week
DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
START_HOUR = 8;	// 8 AM
END_HOUR = 21;	// 9 PM


// Takes a Time in h:m Format and Returns a Decimal Format
function timeToDecimal(time) {
	
	var time_spl = time.split(':');
	hr = Number(time_spl[0]);
	min = Number(time_spl[1]);
	return (hr-START_HOUR) + (min/60);
	
}

// Takes a Time in Decimal Format and Returns a h:m Format
function decimalToTime(dec) {
	hr = dec+START_HOUR;
	min = Math.floor((hr%1)*60);
	if (hr > 12) { hr = hr%12; }
	hr = parseInt(hr);
	if (min < 10) { min = '0'+min; }
	return hr+':'+min;
}