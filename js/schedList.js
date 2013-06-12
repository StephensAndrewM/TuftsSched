var SchedList = {
	
	init: function() {
		
		
		
	},
	
	addBlock: function(data) {
		
		// Create Sidebar Block Object (Only One Per Item)
		block = $('<li class="block-list-item"></li>');
		
		// Set Color Based on Preset Data
		block.css({ 
			background:'rgba('+data.color[0]+','+data.color[1]+','+data.color[2]+',1)'
		});

		// Put Event Data in Block
		block.append('<span class="block-list-title">'+data.title+'</span>');
		block.append('<span class="block-list-professor">'+data.professor+'</span>');
		block.append('<span class="block-list-location">'+data.location+'</span>');
		block.append('<span class="block-list-time">'+data.timeLabel+'</span>');

		// Then Display the Sidebar Block
		$('#block-list').append(block);
		
	},
			
	editBlock: function(data) {



	},
			
	removeBlock: function() {
		
		
		
	}
	
};