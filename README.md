# resource-server

[![GitHub Downloads][github-img]][github-url]
[![Travis-CI][travis-img]][travis-url]
[![Coveralls][coveralls-img]][coveralls-url]
[![Code Climate][codeclimate-img]][codeclimate-url]
[![Code Climate][codeclimate-issues-img]][codeclimate-issues-url]
[![js-standard-style][standard-img]][standard-url]


Dynamically install and serve resources

## Installation

``` bash
  $ npm install 'bagrounds/resource-server'
```

## [Documentation][gh-pages-url]


## Usage
``` bash
  $ npm start
```
To serve modules, use url's like the following:
 
<http://HOST:PORT?functionInstallName=some-module&functionRequireName=some-module>

If you don't include query parameters, resource-server will respond with a list
of modules currently being hosted and their port numbers.

## Tests
``` bash
  $ npm test
```


## [Changelog][changelog-url]

## License
[MIT][license-url]


[changelog-url]: CHANGELOG.md

[license-url]: LICENSE

[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/

[github-img]: https://img.shields.io/github/downloads/bagrounds/resource-server/total.svg
[github-url]: https://github.com/bagrounds/resource-server

[travis-img]: https://img.shields.io/travis/bagrounds/resource-server/master.svg
[travis-url]: https://travis-ci.org/bagrounds/resource-server

[coveralls-img]: https://coveralls.io/repos/github/bagrounds/resource-server/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/bagrounds/resource-server?branch=master

[codeclimate-img]: https://codeclimate.com/github/bagrounds/resource-server/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/bagrounds/resource-server

[codeclimate-issues-img]: https://codeclimate.com/github/bagrounds/resource-server/badges/issue_count.svg
[codeclimate-issues-url]: https://codeclimate.com/github/bagrounds/resource-server/issues

[gh-pages-url]: http://bagrounds.github.io/resource-server
