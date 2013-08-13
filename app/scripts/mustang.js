//Global object
var MUSTANG = {};

//Self invoke, no need to parse in as argument for require function
(function () {
	MUSTANG.map = function(config) {
		var _name = config.name;

		return {
			getName: function() {
				return _name;
			},
			setName: function(newName) {
				_name = newName;
			}	
		};
	};	
	var anniConfig = {
		name: '50 year MUSTANG'
	};

	var newMap = new MUSTANG.map(anniConfig);

	console.log(newMap.getName());
	
})();