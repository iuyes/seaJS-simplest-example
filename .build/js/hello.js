define('hello',function(require){
	var Popup = require('./world');
	//console.log(Popup);
	var s = new Popup.gt();
	s.show();
})