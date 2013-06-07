// Stores Times Associated with Blocks
var PERIODS = {
	
	alpha: {
		'A': [
			new SchedTime(0, 0.5, 50),
			new SchedTime(2, 0.5, 50),
			new SchedTime(3, 1.5, 50)
		],
		'B': [
			new SchedTime(1, 0.5, 50),
			new SchedTime(3, 0.5, 50),
			new SchedTime(4, 0.5, 50)
		],

		'C': [
			new SchedTime(1, 1.5, 50),
			new SchedTime(2, 1.5, 50),
			new SchedTime(4, 1.5, 50)
		],
		'D': [
			new SchedTime(0, 1.5, 50),
			new SchedTime(1, 2.5, 50),
			new SchedTime(3, 2.5, 50)
		],
		'E': [
			new SchedTime(0, 2.5, 50),
			new SchedTime(2, 2.5, 50),
			new SchedTime(4, 2.5, 50),
		],
		'F': [
			new SchedTime(1, 4, 50),
			new SchedTime(2, 4, 50),
			new SchedTime(4, 4, 50)
		],
		'G': [
			new SchedTime(0, 5.5, 50),
			new SchedTime(2, 5.5, 50),
			new SchedTime(4, 5.5, 50),
		],
		'H': [
			new SchedTime(1, 5.5, 50),
			new SchedTime(3, 5.5, 50),
			new SchedTime(4, 6.5, 50),
		],
		'I': [
			new SchedTime(0, 7, 50),
			new SchedTime(2, 7, 50),
			new SchedTime(4, 7.5, 50)
		],
		'J': [
			new SchedTime(0, 8.5, 50, 1),
			new SchedTime(1, 7, 50),
			new SchedTime(3, 7, 50)
		],
		'K': [
			new SchedTime(0, 8.5, 50, 2),
			new SchedTime(2, 8.5, 50),
		],
		'L': [
			new SchedTime(1, 8.5, 50),
			new SchedTime(3, 8.5, 50)
		],
		'M': [
			new SchedTime(0, 10, 50, 1),
			new SchedTime(2, 10, 50)
		],
		'N': [
			new SchedTime(0, 10, 50, 2),
			new SchedTime(1, 10, 50),
			new SchedTime(3, 10, 50)
		],
		'P': [
			new SchedTime(0, 11.5, 50, 1),
			new SchedTime(2, 11.5, 50)
		],
		'Q': [
			new SchedTime(0, 11.5, 50, 2),
			new SchedTime(1, 11.5, 50),
			new SchedTime(3, 11.5, 50)
		]
	},
			
	plus: {
		'A+': [
			new SchedTime(0, 0, 75),
			new SchedTime(2, 0, 75),
		],
		'B+': [
			new SchedTime(1, 0, 75),
			new SchedTime(3, 0, 75),
			new SchedTime(4, 0, 75)
		],
		'D+': [
			new SchedTime(1, 2.5, 75),
			new SchedTime(3, 2.5, 75)
		],
		'E+': [
			new SchedTime(0, 2.5, 75),
			new SchedTime(2, 2.5, 75),
			new SchedTime(4, 2.5, 75)
		],	
		'F+': [
			new SchedTime(1, 4, 75),
			new SchedTime(3, 4, 75)
		],
		'G+': [
			new SchedTime(0, 5.5, 75),
			new SchedTime(2, 5.5, 75),
		],
		'H+': [
			new SchedTime(1, 5.5, 75),
			new SchedTime(3, 5.5, 75),
		],
		'I+': [
			new SchedTime(0, 7, 75),
			new SchedTime(2, 7, 75)
		],
		'J+': [
			new SchedTime(1, 7, 75),
			new SchedTime(3, 7, 75)
		],
		'K+': [
			new SchedTime(0, 8.5, 75),
			new SchedTime(2, 8.5, 75)
		],
		'L+': [
			new SchedTime(1, 8.5, 75),
			new SchedTime(3, 8.5, 75)
		],
		'M+': [
			new SchedTime(0, 10, 75),
			new SchedTime(2, 10, 75)
		],			
		'N+': [
			new SchedTime(1, 10, 75),
			new SchedTime(3, 10, 75)
		],
		'P+': [
			new SchedTime(0, 11.5, 75),
			new SchedTime(2, 11.5, 75)
		],
		'Q+': [
			new SchedTime(1, 11.5, 75),
			new SchedTime(3, 11.5, 75)
		]
	},
			
	numeric: {
		'0':  [ new SchedTime(0, 1,   150, 1) ],
		'0+': [ new SchedTime(0, 0.5, 180, 2) ],
		'1':  [ new SchedTime(1, 1,   150, 1) ],
		'1+': [ new SchedTime(1, 0.5, 180, 2) ],
		'2':  [ new SchedTime(2, 1,   150, 1) ],
		'2+': [ new SchedTime(2, 0.5, 180, 2) ],
		'3':  [ new SchedTime(3, 1,   150, 1) ],
		'3+': [ new SchedTime(3, 0.5, 180, 2) ],
		'4':  [ new SchedTime(4, 1,   150, 1) ],
		'4+': [ new SchedTime(4, 0.5, 180, 2) ],
		'5':  [ new SchedTime(0, 5.5, 150, 1) ],
		'5+': [ new SchedTime(0, 5.5, 180, 2) ],
		'6':  [ new SchedTime(1, 5.5, 150, 1) ],
		'6+': [ new SchedTime(1, 5.5, 180, 2) ],
		'7':  [ new SchedTime(2, 5.5, 150, 1) ],
		'7+': [ new SchedTime(2, 5.5, 180, 2) ],
		'8':  [ new SchedTime(3, 5.5, 150, 1) ],
		'8+': [ new SchedTime(3, 5.5, 180, 2) ],
		'9':  [ new SchedTime(4, 5.5, 150, 1) ],
		'9+': [ new SchedTime(4, 5.5, 180, 2) ],
		'10':  [ new SchedTime(0, 10.5, 150, 1) ],
		'10+': [ new SchedTime(0, 10,   180, 2) ],
		'11':  [ new SchedTime(1, 10.5, 150, 1) ],
		'11+': [ new SchedTime(1, 10,   180, 2) ],
		'12':  [ new SchedTime(2, 10.5, 150, 1) ],
		'12+': [ new SchedTime(2, 10,   180, 2) ],
		'13':  [ new SchedTime(3, 10.5, 150, 1) ],
		'13+': [ new SchedTime(3, 10,   180, 2) ]
	}
	
};
