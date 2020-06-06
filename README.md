# React Calculator under TDD
This project concentrates on the development of a React-based calculator under test-driven development (TDD)

## Technologies
- React
- HTML/CSS
- Jest
- Enzyme

## Blockers/Resolutions
- Initially, I didn't know how to ignore snapshot test results as they were already committed to GitHub. Fortunately, after following instructions on [StackOverflow](https://stackoverflow.com/questions/7927230/remove-directory-from-remote-repository-after-adding-them-to-gitignore), I successfully removed the snapshot test results from GitHub using the following steps: entering `git rm --cached '__snapshots__' -r` in the terminal, wrote the directory path of `__snapshot__` into  `.gitignore` and finally, made a commit. 