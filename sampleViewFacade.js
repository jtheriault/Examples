function SampleViewFacade ($) {
	var me = this,
		document = $('body')[0].ownerDocument;
	
	me.getCheckbox = function () {
		return document.querySelector('.sample input[type="checkbox"]');
	};
	
	me.getFieldset = function () {
		return document.querySelector('.sample fieldset');
	}
	
	me.bindClick = function (element, callback) {
		$(element).on('click', callback);
	};
}
