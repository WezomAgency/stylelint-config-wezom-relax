# Rules

Here are all the rules within stylelint,  
grouped first by the thing they apply to and then by category and.
(inverted unlike the [original documentation](https://stylelint.io/user-guide/rules))

#### Circuit example 

```md
## Thing

#### Group [Possible errors / Limit language features / Stylistic issues]

- [`rule-name`](link-to-the-doc) description
    - option: [`value`](link-to-the-demonstation-patterns)
    - аutofixable: `true | false`
    - tests: [go to directory](link-to-test-cases)
```

Below you can find a list of rules drawn up for `stylelint-config-wezom-relax`

---

## At-rule

#### Stylistic issues

- [`at-rule-name-case`](https://stylelint.io/user-guide/rules/at-rule-name-case) Specify lowercase or uppercase for at-rules names
    - option: [`"lower"`](https://stylelint.io/user-guide/rules/at-rule-name-case#lower)
    - аutofixable: `true`
    - tests: [go to directory](../__tests__/at-rule-name-case)

---