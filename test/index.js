import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import {
  FullCanvas
} from '../lib';

describe("<FullCanvas />", () => {
  it("matches a provided selector 'full-canvas'", () => {
    expect(
      shallow(<FullCanvas />)
      .is('.full-canvas')
    ).to.equal(true);
  });
});

describe("<Views />", () => {});

describe("<View />", () => {});

describe("<Pages />", () => {});

describe("<Page />", () => {});

describe("<Row />", () => {});
