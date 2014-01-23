function Sample($) {
	var me = this,
		// ordinarily we'd update the signature, but I want our past methods to still work without alteration
		view = $;
	
	me.init1 = function () {
		$('#uxShowFieldset');
		$.click(function () {
			$('#uxFieldset');
		});
		$.toggle();
	};
	
	me.init2 = function () {
		$('#uxShowFieldset').click(function () {
			$('#uxFieldset').toggle();
		})
	};
	
	// "on" is better than "click"
	me.init2_method_refactor = function () {
		$('#uxShowFieldset').on('click',function () {
			$('#uxFieldset').toggle();
		})
	};
	
	// refactor to be relative -- this refactor should be possible by adding greater precision with later tests and not refactoring existing tests
	me.init2_selector_refactor = function () {
		$('.fieldsetToggle:checkbox').click(function () {
			$(this).nextAll('fieldset:first').toggle();
		})
	};
	
	me.init3 = function () {
		view.bindClick(
			view.getCheckbox(),
			function () {
				view.toggleElement(view.getFieldset());
			}
		);
	}
}