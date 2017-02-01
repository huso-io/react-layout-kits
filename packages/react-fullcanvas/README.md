# `<FullCanvas/>` &middot;  [![npm version](https://img.shields.io/npm/v/react-fullcanvas.svg?style=flat)](https://www.npmjs.com/package/react-fullcanvas)&nbsp;[![Build Status](https://travis-ci.org/iTonyYo/react-fullcanvas.svg?branch=master)](https://travis-ci.org/iTonyYo/react-fullcanvas)&nbsp;[![Coverage Status](https://coveralls.io/repos/github/iTonyYo/react-fullcanvas/badge.svg?branch=master)](https://coveralls.io/github/iTonyYo/react-fullcanvas?branch=master)&nbsp;[![](https://img.shields.io/npm/dm/react-fullcanvas.svg)](https://www.npmjs.com/package/react-fullcanvas)&nbsp;[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contribute)

A simple component for fully fill a given container. It's suitable for both of `react` and `react redux` projects.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Todo](#todo)
- [License](#license)

## Install

```shell
yarn add react-fullcanvas
```

## Usage

> `react-fullcanvas` was built with classnames, radium.

ES6 and CommonJS builds are available with each distribution. For example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FullCanvas from 'react-fullcanvas';
import { RouterAvatar, Src } from 'react-simple-avatar';
import svgAvatar from './assets/img/avatar.svg';

ReactDOM.render(
  <FullCanvas className='example'>
    <RouterAvatar
     to='#'
     size= { 88 }>
      <Src from={ svgAvatar }/>
    </RouterAvatar>
  </FullCanvas>
);
```

Or,

```javascript
var React        = require('react');
var ReactDOM     = require('react-dom');
var SimpleAvatar = require('react-simple-avatar');
var FullCanvas   = require('react-fullcanvas');
var svgAvatar    = require('./assets/img/avatar.svg');

ReactDOM.render(
  <FullCanvas className='example'>
    <SimpleAvatar.RouterAvatar
     to='#'
     size= { 88 }>
      <SimpleAvatar.Src from={ svgAvatar }/>
    </SimpleAvatar.RouterAvatar>
  </FullCanvas>
);
```

## Contribute

Use GitHub issues for requests.

See [the contribute files](https://github.com/iTonyYo/react-fullcanvas/tree/master/.github)!

PRs accepted.

## Todo

- [ ] choose a more accurate name for the component
- [ ] make it can receive micro data (in the discussion...)
- [ ] make it can receive dataset (in the discussion...)
- [ ] add doc for introducing how to build
- [ ] add doc for introducing how to preview the given example in the local
- [ ] add doc for introducing the inspiration(or motivation) for creating this component
- [ ] provide schematic
- [ ] provide roadmap
- [ ] provide release notes
- [ ] provide changelog
- [ ] provide online preview
- [ ] provide a place for discussion
- [ ] show the conventions that project followed
- [ ] provide help center(or recipes...)
- [ ] add supported browsers
- [ ] provide umd build
- [ ] add `Thanks` section for some help from articles & developers
- [ ] optimize docs
- [ ] optimize github page for [`<FullCanvas/>`](https://git.io/vMQXj)

## License

[MIT © Shen Weizhong](https://github.com/iTonyYo/react-fullcanvas/blob/master/LICENSE).
