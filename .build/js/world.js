define('world',function(require, exports, module){
	function Util(){
		
	}
	
	Util.prototype.show = function(){
		console.log('This is From world.js!')
	}
	module.exports.gt = Util;
})