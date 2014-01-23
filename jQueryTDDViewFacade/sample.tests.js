/*global module,test*/
var unit, $;

module('sample', {
	setup: function () {
		'use strict';
	}
});

test('clicking checkbox toggles fieldset using simple mock of jQuery', function () {
	'use strict';
	var foundSelector,
		foundClickCallback = null, 
		toggleCalled = false;
	
	$ = function (selector) {
		foundSelector = selector;
	};
	$.click = function (callback) {
		foundClickCallback = callback;
	};
	$.toggle = function () {
		toggleCalled = true;
	};
	
	unit = new Sample($);
	unit.init1();
	
	equal(foundSelector, '#uxShowFieldset', 'Checkbox selected by expected ID');
	notEqual(foundClickCallback, null, 'Callback set for checkbox click');
	
	foundClickCallback();
	
	equal(foundSelector, '#uxFieldset', 'Fieldset selected by expected ID');
	ok(toggleCalled, 'Toggle was called');
});

test('clicking checkbox toggles fieldset using chained mock of jQuery', function () {
	'use strict';
	var expectedCheckboxSelector = '#uxShowFieldset',
		clickExecuting = false,
		expectedFieldsetSelector = '#uxFieldset',
		fieldsetToggled = false;
	
	// Mock jQuery execution chain
	$ = function (selector) {
		if(selector === expectedCheckboxSelector) {
			return {
				click: function (callback) {
					clickExecuting = true;
					callback();
					clickExecuting = false;
				}
			}
		} else if (clickExecuting && selector === expectedFieldsetSelector) {
			return {
				toggle: function () {
					fieldsetToggled = true;
				}
			}
		}
	};
	
	unit = new Sample($);
	unit.init2();
	
	ok(fieldsetToggled, 'Fieldset was toggled on checkbox click');
});
 
 test('clicking checkbox toggles fieldset using view facade', function () {
	'use strict';
	var checkbox = {},
		foundCheckbox,
		foundClickCallback = null, 
		fieldset = {},
		foundFieldset, 
		facade = {
			getCheckbox: function () {
				return checkbox;
			},
			bindClick: function (element, callback) {
				foundCheckbox = element;
				foundClickCallback = callback;
			},
			getFieldset: function () {
				return fieldset;
			},
			toggleElement: function (element) {
				foundFieldset = element;
			}
		};
	
	unit = new Sample(facade);
	unit.init3();
	
	equal(foundCheckbox, checkbox, 'Correct checkbox found for binding click event');
	notEqual(foundClickCallback, null, 'Callback for click event provided');
	
	foundClickCallback();
	
	equal(foundFieldset, fieldset, 'Correct fieldset found for binding click event');
 });
