var Server = {
	
	initRequest: function() {
		
		$.ajax({
			url: 'php/ajax.php',
			type: 'POST',
			data: { mode:'initRequest' },
			dataType: 'json',
			success: function(html) {
				
			},
			error: function(e) {
				Server.displayError('Server Error', 41, 'The server is temporarily unavailable. Please try again in a minute.')
			}
		});
		
	},
			
	userSave: function(data) {

		$.ajax({
			url: 'php/ajax.php',
			type: 'POST',
			data: $.extend({ mode:'userSave' }, data),
			dataType: 'json',
			success: function(html) {
				
			},
			error: function(e) {
				Server.displayError('Server Error', 42, 'The server is temporarily unavailable. Please try again in a minute.')
			}
		});

	},
	
	displayError: function(type, id, msg) {
		// This Will Handle the Error Properly In the Future, but This Works for Now
		console.log(type,id,msg);
	}
	
}