# Build a Calculator

[![tests](http://img.shields.io/travis/tkraak/calculator/master.svg?style=flat)](https://travis-ci.org/tkraak/calculator)
[![coverage](https://img.shields.io/coveralls/tkraak/calculator.svg?style=flat)](https://coveralls.io/github/tkraak/calculator?branch=master)

Learn fundamental JavaScript via a [three-part blog post series](https://zellwk.com/blog/calculator-part-1/) by [@zellwk](https://github.com/zellwk).

![Simple Calculator](https://zellwk.com/images/2018/calculator-1/calculator.gif)

## Getting Started

* clone the seed repository:
  * `git clone https://github.com/tkraak/calculator-seed.git calculator`
  * `cd calculator`
* install project dependencies:
  * `npm install` or `yarn install`
* run the calculator app in your favorite browser at `http://localhost:8080`:
  * `npm start`
* bundle a production build powered by [webpack](https://webpack.js.org)
  * `npm run build`
* run tests with [AVA](https://github.com/avajs/ava)
  * `npm test`

## Optional but Recommended

* push your work to your GitHub account:
  * create a repository named `calculator` on GitHub
  * `git remote set-url origin https://github.com/USERNAME/calculator.git` (ensure that `USERNAME` matches your GitHub username)
  * `git push -u origin master`
* keep your project's tooling up-to-date by periodically pulling from the seed repository (`upstream`):
  * `git remote add upstream https://github.com/tkraak/calculator-seed.git`
  * `git pull upstream master --rebase`
