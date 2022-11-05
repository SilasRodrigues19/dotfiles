# Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add function to handle form
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: test, feat, fix, chore, docs, refactor, style, ci and perf.
```

More Examples:

- `test`: (adding missing tests)
- `feat`: (a new feature)
- `fix`: (a bug fix)
- `chore`: (build process or auxiliary tool changes)
- `refactor`: (a code change that neither fixes a bug or adds a feature)
- `style`: (markup, white-space, formatting, missing semi-colons ...)
- `ci`: (CI related changes)
- `perf`: (a code change that improves performance)

References:

- [Conventional Commits](https://www.conventionalcommits.org/)
- [git-cz](https://www.npmjs.com/package/git-cz)
