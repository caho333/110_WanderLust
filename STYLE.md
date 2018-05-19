# Style Guide
- Intellij IDEA will be used for editing all code
- Indentation on lines will be done with 2 spaces, not tabs
- Between 80-100 maximum characters per line
- Line endings will be CRLF (\r\n)
- Filenames are `camelCase`: lower case letter on first word followed by upper case for
 other words
  - Example: `app.js`, `searchBar.js`
- Classnames are `PascalCase`: upper case as first letter on each word
  - Example: `App`, `SearchBar` 

## Steps to change these all in settings in IntelliJ IDEA
1. Open settings window `File > Settings`
2. Navigate to `Editor > Code Style`
3. Change `Line Separator` to `Windows (\r\n)`
4. Change at `Hard Wrap` to `100`
5. Change `Visual Guides` to `80, 100`
6. Disable `Indents Detection`
7. Expand the `Code Style` drop down in the side bar
8. Select `JavaScript`
9. Make sure that `Use tab character` and `Keep indents on empty lines` are unchecked
10. Set `Tab Size` and `Indent` to `2`, and `Continuation Indent` to `4`
11. Select `Other File Types` in the side bar
12. Make sure `Use tab character` and `Smart tabs` are unchecked
13. Set `Tab size` and `Indent` to `2`


# Git Style
### Branch Names
Branch names will follow this format: 
```
git branch [MVC]_[featurename]
```

Choose one of `M,V,C`, `M` for Model, `V` for View, and `C` for Controller

The `[featurename]` will use `snake_case`: all lowercase with underscores separating words

### Commit Messages
Commit messages should be no longer than one sentence long, describing the actual
changes in the code concisely.
