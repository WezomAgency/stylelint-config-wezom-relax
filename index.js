module.exports = {
	extends: [
		'stylelint-config-recommended'
	],
	rules: {
		'at-rule-name-case': 'lower',
		'declaration-no-important': true,
		'selector-max-id': 0,
		'selector-max-universal': 0
	}
};
