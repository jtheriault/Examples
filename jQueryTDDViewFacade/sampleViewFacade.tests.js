/*globals module, test*/
var unit;

function getJqueryMockDocument (html) {
    var $ref, $doc;

    $('iframe#jqueryMockDocument').remove();
    $ref = $('<iframe id="jqueryMockDocument" style="display: none;" />').appendTo('body').contents();
    $doc = $ref.extend(function (selector) { return $ref.find(selector); }, $ref);

    // For IE (head missing immediately on iframe add)
    if ($doc('head').length === 0) {
        $doc[0].write('<head />');
    }

    // For IE (body missing immediately on iframe add)
    if ($doc('body').length === 0) {
        $doc[0].write('<body />');
    }

    if (html) {
        $doc('body').append(html);
    }

    return $doc;
}

module('Sample View Facade', {
	setup: function () {
		'use strict';
	}
});

test('getCheckbox returns the correct checkbox', function () {
	'use strict';
	var foundCheckbox,
		$mock = getJqueryMockDocument('<div class="sample"><input id="correctElement" type="checkbox" /></div>');
	
	unit = new SampleViewFacade($mock);
	foundCheckbox = unit.getCheckbox();
		
	equal($(foundCheckbox).attr('id'), 'correctElement', 'Found the checkbox with the expected ID.');
});

test('getCheckbox returns null for no matching checkbox', function () {
	'use strict';
	var foundCheckbox,
	$mock = getJqueryMockDocument('');
	
	unit = new SampleViewFacade($mock);
	foundCheckbox = unit.getCheckbox();
	
	equal(foundCheckbox, null, 'Found null for no matching checkbox.');
});

test('getFieldset returns the correct fieldset', function () {
	'use strict';
	var foundFieldset,
		$mock = getJqueryMockDocument('<div class="sample"><fieldset id="correctElement"></fieldset></div>');
	
	unit = new SampleViewFacade($mock);
	foundFieldset = unit.getFieldset();
	
	equal($(foundFieldset).attr('id'), 'correctElement', 'Found the fieldset with the expected ID.');
});

test('getFieldset returns null for no matching checkbox', function () {
	'use strict';
	var foundFieldset,
		$mock = getJqueryMockDocument('');
	
	unit = new SampleViewFacade($mock);
	foundFieldset = unit.getFieldset();
	
	equal(foundFieldset, null, 'Found null for no matching fieldset.');
});

test('bindClick causes the provided callback to be triggered on click of the element', function () {
	'use strict';
	var callbackCalled = false,
		$mock = getJqueryMockDocument('<button id="clickme" />');
	
	
	unit = new SampleViewFacade($mock);
	unit.bindClick($mock('button#clickme')[0], function () {
		callbackCalled = true;
	});
	
	$mock('button#clickme').click();
	
	ok(callbackCalled, 'Bound callback called on click.');
});