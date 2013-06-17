var Interaction = {
	
	init: function() {
		
		Interaction.overlaySelectButtonInit();
		Interaction.emptyBlockInit();
		
		// Event Listeners for Add/Edit Form (Only Add Once)
		$('#block-data-form').submit(Interaction.addBlockModalSave);
		$('.button-close-form').click(function() {
			$.fancybox.close();
		});
				
	},
	
	// This is Set Whenever a Series is Selected from the Sidebar
	activeSeries: '',
	
	overlaySelectButtonInit: function() {

		$('.overlay-select-button').hover(function() {
			
			var type = $(this).attr('data-type');
			
			$('.sched-empty-block:not(.series-'+type+')').stop()
				.animate({ opacity:0 }, 200, function() {
					$(this).addClass('sched-empty-block-collapsed');
				});
			
			$('.sched-empty-block.series-'+type).stop()
				.removeClass('sched-empty-block-collapsed')
				.animate({ opacity:0.9 }, 200);
			
		}, function() {
			
			$('.sched-empty-block:not(.series-active)').stop()
				.animate({ opacity:0 }, 200, function() {
					$(this).addClass('sched-empty-block-collapsed');
				});
			$('.sched-empty-block.series-active').stop()
				.removeClass('sched-empty-block-collapsed')
				.animate({ opacity:0.6 }, 200);
			
		}).click(function() {
			
			var type = $(this).attr('data-type');
			
			// Save for Use in Form Interaction
			Interaction.activeSeries = type;
			
			$('.sched-empty-block:not(.series-'+type+')')
				.removeClass('series-active')
				.stop()
				.animate({ opacity:0 }, 200, function() {
					$(this).addClass('sched-empty-block-collapsed');
				});
			
			$('.sched-empty-block.series-'+type)
				.stop()
				.removeClass('sched-empty-block-collapsed')
				.animate({ opacity:0.6 }, 200)
				.addClass('series-active');
			
			
		});
		
	},
	
	emptyBlockInit: function() {
		
		$('.sched-empty-block').hover(function() {
			
			if (!$(this).hasClass('series-active')) { return; }
			
			var period = $(this).attr('data-period-sn');
			$('.sched-empty-block:not(.period-'+period+')')
				.stop()
				.animate({ opacity:0.3 }, 100);
			$('.sched-empty-block.period-'+period)
				.stop()
				.animate({ opacity:0.9 }, 100);
			
		}, function() {
			
			$('.sched-empty-block.series-active')
					.stop()
					.animate({ opacity:0.6 }, 200);
			
		}).click(function() {
			
			var period = $(this).attr('data-period');
			Interaction.addBlockModalOpen(period);
			
		});
		
	},
	
	// These Are Set Whenever the Modal Opens to Determine Saving Functionality
	modalMode: '',
	modalPeriod: '',
	
	addBlockModalOpen: function(period) {
		
		// Reset Inputs
		$('#block-data-form .block-data-input').val('');
		$('#button-submit-block-form').val('Add Class to Calendar');
				
		// Set Based on Clicked Block
		var timeDisplay = $('#data-display-time');
		timeDisplay.html('<span class="data-display-heading">'+period+' Block</span>');
		for (var i in PERIODS[Interaction.activeSeries][period]) {
			var time = PERIODS[Interaction.activeSeries][period][i];
			timeDisplay.append(DAYS[time.day] + ", " + decimalToTime(time.start) 
				+ " - " + decimalToTime(time.start+(time.duration/59.9)) + "<br />");
				// Division by 59.9 Because of Rounding Issues (Yes, It's a Hack)
		}
		
		// Data for Saving
		Interaction.modalMode = 'ADD';
		Interaction.modalPeriod = period;
		
		$.fancybox({
			href: '#block-data-modal',
			width:500
		});
	
	},
	
	addBlockModalSave: function() {
		
		// Validation (Basic)
		if ($('#data-input-title').val() === '') {
			alert('You must enter a name for the class.');
			return false;
		}
				
		var time = new BlockData(
			$('#data-input-title').val(),			// Title
			$('#data-input-location').val(),		// Location
			$('#data-input-professor').val(),		// Professor
			PERIODS[Interaction.activeSeries][Interaction.modalPeriod], //Times
			Interaction.modalPeriod + ' Block',		// TimeLabel
			Interaction.randomColor()				// Color
		);
			
		// Add to Grid and List
		SchedGrid.addBlock(time);
		SchedList.addBlock(time);
		
		// Add to Global Data
		Sched.push(time);
		
		// Close Form
		$.fancybox.close();
		
		return false;
		
	},
			
	randomColor: function() {
		
		// Generate Three Random RGB Values
		// With Bounds to Avoid Too Dark or Light Colors
		var rand1 = Math.floor(Math.random()*208)+32;
		var rand2 = Math.floor(Math.random()*208)+32;
		var rand3 = Math.floor(Math.random()*208)+32;
		var color = [rand1, rand2, rand3];
		
		// Set One to 255 to Make Sure Color is Bright Enough
		var randi = Math.floor(Math.random()*3);
		color[randi] = 255;
		return color;
		
	}
	
}