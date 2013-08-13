define(function (require) {
	var map = require('./map');
	return {
		logMap: function () {
			console.log('map color: '+ map.color);
		}
	}
});