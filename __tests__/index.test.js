const stylelint = require('stylelint');
const fs = require('fs');
const path = require('path');
const config = require('../index');

const tests = ['at-rule-name-case'];

const getCode = (test, file) => {
	return fs.readFileSync(path.join(__dirname, test, file), 'utf-8').toString();
};

tests.forEach((test) => {
	describe(`${test} => valid cases`, () => {
		let result;

		beforeEach(() => {
			result = stylelint.lint({
				config,
				code: getCode(test, 'valid.css')
			});
		});

		it('did not error', () => {
			return result.then((data) => expect(data.errored).toBeFalsy());
		});

		it('flags no warnings', () => {
			return result.then((data) => {
				const warnings = data.results[0].warnings.filter(
					(warning) => warning.rule === test
				);
				expect(warnings).toHaveLength(0);
			});
		});
	});

	describe(`${test} => invalid cases`, () => {
		let result;

		beforeEach(() => {
			result = stylelint.lint({
				config,
				code: getCode(test, 'invalid.css')
			});
		});

		it('has error', () => {
			return result.then((data) => expect(data.errored).toBeTruthy());
		});

		it('has flags warnings', () => {
			return result.then((data) => {
				const warnings = data.results[0].warnings.filter(
					(warning) => warning.rule === test
				);
				expect(warnings.length).toBeGreaterThan(0);
			});
		});
	});
});
