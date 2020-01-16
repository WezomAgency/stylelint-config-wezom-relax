# Rules

Here are all the rules within stylelint,  
grouped first by the thing they apply to and then by category and.
(inverted unlike the [original documentation](https://stylelint.io/user-guide/rules))

#### Circuit example 

```md
## Group

### Category [Possible errors / Limit language features / Stylistic issues]

#### [`rule-name`](link-to-the-doc)

_description_  
option: [`value`](link-to-the-demonstation-patterns)  
tests: [go to directory](link-to-test-cases)
```

Below you can find a list of rules drawn up for `stylelint-config-wezom-relax`

- [At-rule](#at-rule)

---

## At-rule

### _Possible errors_

#### [`at-rule-no-unknown`](https://stylelint.io/user-guide/rules/at-rule-no-unknown)

_Disallow unknown at-rules_  
option: [`true`](https://stylelint.io/user-guide/rules/at-rule-no-unknown#true)  
tests: _no tests yet_

### _Stylistic issues_

#### [`at-rule-name-case`](https://stylelint.io/user-guide/rules/at-rule-name-case)

_Specify lowercase or uppercase for at-rules names (Аutofixable)_  
option: [`"lower"`](https://stylelint.io/user-guide/rules/at-rule-name-case#lower)  
tests: [go to the directory](../__tests__/at-rule-name-case)

---
