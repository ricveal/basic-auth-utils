<div align="center">
<h1>basic-auth-utils</h1>

<p>Utils to work with Basic Authentication</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![PRs Welcome][prs-badge]][prs]
<!-- prettier-ignore-end -->

## The problem

I'm usually repeating code when I was working with Basic Authentication. This
type of authentication uses Base64 encoding so it's very usual to extract
credentials (username and password) given an authorization header or, given the
credentials, build the header. This utility wants to extract this logic to reuse
it across my different projects.

## This solution

It's a simple set of utility functions that:

- process your request headers and return an object with the username and the
  password or an Error if:

  - The authorization (or Authorization) header is not given.
  - Its format is not correct.

- given a username and password, returns a Basic header.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save @ricveal/basic-auth-utils
```

## Usage

Once it's installed as dependency, you only have to import it and use the util
you prefer:

```ts
import {
  getUsernameAndPasswordFromAuthBasic,
  getAuthBasicFromUsernameAndPassword,
} from '@ricveal/basic-auth-utils'

const headers = {
  authorization: 'Basic dXNlcjp0ZXN0',
}
const {username, password} = getUsernameAndPasswordFromAuthBasic(headers)
console.log(username, password) // 'user', 'test'

console.log(getAuthBasicFromUsernameAndPassword('user', 'test')) // 'Basic dXNlcjp0ZXN0'
```

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/ricveal/basic-auth-utils/validate?logo=github&style=flat-square
[build]: https://github.com/ricveal/basic-auth-utils/actions?query=workflow%3Avalidate
[coverage-badge]: https://img.shields.io/codecov/c/github/ricveal/basic-auth-utils.svg?style=flat-square
[coverage]: https://codecov.io/github/ricveal/basic-auth-utils
[version-badge]: https://img.shields.io/npm/v/@ricveal/basic-auth-utils.svg?style=flat-square
[package]: https://www.npmjs.com/package/@ricveal/basic-auth-utils
[downloads-badge]: https://img.shields.io/npm/dm/@ricveal/basic-auth-utils.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/@ricveal/basic-auth-utils
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: https://makeapullrequest.com
[bugs]: https://github.com/ricveal/basic-auth-utils/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/ricveal/basic-auth-utils/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/ricveal/basic-auth-utils/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->
