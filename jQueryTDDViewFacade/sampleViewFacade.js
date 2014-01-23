function SampleViewFacade ($) {
	var me = this;
	
	me.getCheckbox = function () {
		var result = $('.sample :checkbox:first').eq(0);
		
		if (result.length === 1) {
			return result[0];
		}
		
		return null;
	};
	
	me.getFieldset = function () {
		var result = $('.sample fieldset').eq(0);
		
		if (result.length === 1) {
			return result[0];
		}
		
		return null;
	}
	
	me.bindClick = function (element, callback) {
		$(element).on('click', callback);
	};
}
