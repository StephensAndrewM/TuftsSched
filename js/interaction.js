var Interaction = {
	
	init: function() {
		
		Interaction.overlaySelectButtonInit();
		Interaction.emptyBlockInit();
		
	},
	
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
			
			$('.sched-empty-block:not(.series-'+type+')').removeClass('series-active').stop()
				.animate({ opacity:0 }, 200, function() {
					$(this).addClass('sched-empty-block-collapsed');
				});
			$('.sched-empty-block.series-'+type).stop()
				.removeClass('sched-empty-block-collapsed')
				.animate({ opacity:0.6 }, 200)
				.addClass('series-active');
			
			
		});
		
	},
	
	emptyBlockInit: function() {
		
		$('.sched-empty-block').hover(function() {
			
			if (!$(this).hasClass('series-active')) { return; }
			
			var period = $(this).attr('data-period');
			$('.sched-empty-block:not(.period-'+period+')').stop()
					.animate({ opacity:0.3 }, 100);
			$('.sched-empty-block.period-'+period).stop()
					.animate({ opacity:0.9 }, 100);
			
		}, function() {
			
			$('.sched-empty-block.series-active').stop()
					.animate({ opacity:0.6 }, 200);
			
		}).click(function() {
			
			var period = $(this).attr('data-period');
			Interaction.addBlockModalOpen(period);
			
		});
		
	},
	
	addBlockModalOpen: function(period) {
		
		$.fancybox({
			href: '#class-data-modal',
			width:500
		});
		
		$('#class-data-form').submit(Interaction.addBlockModalSave);
		$('.button-close-form').click(function() {
			$.fancybox.close();
		})
	
	},
	
	addBlockModalSave: function() {
		
		
		
		return false;
		
	}
	
}

$(document).ready(Interaction.init);