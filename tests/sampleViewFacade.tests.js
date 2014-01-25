/*globals module, test*/
(function (module, test) {
	var unit;
	
	module('Sample View Facade', {
		setup: function () {
			'use strict';
		}
	});
	
	test('getCheckbox returns the correct checkbox', function () {
		'use strict';
		var foundCheckbox,
			$mock = $('<div class="sample"><input id="correctElement" type="checkbox" /></div>').rescope();
		
		unit = new SampleViewFacade($mock);
		foundCheckbox = unit.getCheckbox();
			
		equal($(foundCheckbox).attr('id'), 'correctElement', 'Found the checkbox with the expected ID.');
	});
	
	test('getCheckbox returns null for no matching checkbox', function () {
		'use strict';
		var foundCheckbox,
		$mock = $('').rescope();
		
		unit = new SampleViewFacade($mock);
		foundCheckbox = unit.getCheckbox();
		
		equal(foundCheckbox, null, 'Found null for no matching checkbox.');
	});
	
	test('getFieldset returns the correct fieldset', function () {
		'use strict';
		var foundFieldset,
			$mock = $('<div class="sample"><fieldset id="correctElement"></fieldset></div>').rescope();
		
		unit = new SampleViewFacade($mock);
		foundFieldset = unit.getFieldset();
		
		equal($(foundFieldset).attr('id'), 'correctElement', 'Found the fieldset with the expected ID.');
	});
	
	test('getFieldset returns null for no matching checkbox', function () {
		'use strict';
		var foundFieldset,
			$mock = $('').rescope();
		
		unit = new SampleViewFacade($mock);
		foundFieldset = unit.getFieldset();
		
		equal(foundFieldset, null, 'Found null for no matching fieldset.');
	});
	
	test('bindClick causes the provided callback to be triggered on click of the element', function () {
		'use strict';
		var callbackCalled = false,
			$mock = $('<button id="clickme" />').rescope();
		
		
		unit = new SampleViewFacade($mock);
		unit.bindClick($mock('button#clickme')[0], function () {
			callbackCalled = true;
		});
		
		$mock('button#clickme').click();
		
		ok(callbackCalled, 'Bound callback called on click.');
	});
})(module, test);