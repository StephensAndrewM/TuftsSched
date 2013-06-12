var Server = {
	
	initRequest: function() {
		
		$.ajax({
			url: 'ajax.php',
			type: 'POST',
			data: { mode:'initRequest' },
			success: function() {
				
			},
			error: function() {
		
			}
		});
		
	},
			
	userSave: function(data) {

		$.ajax({
			url: 'ajax.php',
			type: 'POST',
			data: $.extend({ mode:'userSave' }, data),
			success: function(html) {
				
			},
			error: function(e) {
				
			}
		});

	}
	
}