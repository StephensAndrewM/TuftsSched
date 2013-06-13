/* Global Schedule Data Array
 * Must Be Updated Any Time a Display is Updated
 * This Data is Saved to the Server
 */
var Sched = [];

/* SchedTime Class
 * Used in Predefined Periods Data
 * Each Empty Block Has Its Own SchedTime
 * 
 * @param day Numeric Day of Week, 0-4
 * @param start Decimal Time for Beginning of Block
 * @param duration Integer, Number of Minutes in Block
 * @param column If Multiple Empty Blocks are in the Same Time Slot,
 *		the Column Param Determines How to Orient Each (Left or Right)
 *		If Zero or Empty, The Block is the Only One in the Time Slot
 */
var SchedTime = function(day, start, duration, column) {
	this.day = day;
	this.start = start;
	this.duration = duration;
	this.column = (typeof column === "undefined") ? 0 : column;
};

/* BlockData Class
 * Used When Storing Data Prior to Server Save and in Passing Between Functions
 * 
 * @param title Title of class, displayed on grid and list.
 * @param location Location of class, for display.
 * @param professor Professor of class, for display.
 * @param times Array of SchedTime objects to determine positioning.
 * @param timeLabel Period name assigned to the class block.
 * @param color Array of integers giving RGB color for display.
 */
var BlockData = function(title, location, professor, times, timeLabel, color) {
	this.title = title;
	this.location = location;
	this.professor = professor;
	this.times = times;
	this.timeLabel = timeLabel;
	this.color = color;
}

// String Constants for Days in Week
DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// Used as Base for Calculating Decimal Time
START_HOUR = 8;	// 8 AM
END_HOUR = 21;	// 9 PM


// Set Up Initialiazer Functions for Page
$(document).ready(function() {
	SchedGrid.init();
	SchedList.init();
	Interaction.init();
	Server.initRequest();
});



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
