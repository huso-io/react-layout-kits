import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import FullCanvas from '../lib';

describe("<FullCanvas />", () => {
  it("renders children when passed in", () => {
    expect(
      shallow(
        <FullCanvas>
          <div/>
        </FullCanvas>
      )
      .contains(<div/>)
    ).to.equal(true);
  });

  it("matches a provided selector 'full-canvas'", () => {
    expect(
      shallow(<FullCanvas />)
      .is('.full-canvas')
    ).to.equal(true);
  });

  it("matches a provided HTML markup", () => {
    let renderedHtml = '<div class="full-canvas" data-radium="true" ' +
                       'style="overflow: hidden; width: 100%; height: 100%; ' +
                       'box-sizing: border-box;"></div>';
    console.log( mount(<FullCanvas />).html() );
    expect(
      mount(<FullCanvas />)
      .html()
    ).to.equal(renderedHtml);
  });

  it("contains only one node", () => {
    expect(
      mount(<FullCanvas />)
      .find('.full-canvas')
      .length
    ).to.equal(1);
  });

  it("exists the current node", () => {
    expect(
      mount(<FullCanvas />)
      .exists('.full-canvas')
    ).to.equal(true);
  });

  it("type of the current node is 'div'", () => {
    expect(
      shallow(<FullCanvas />)
      .type()
    ).to.equal('div');
  });

  it("matches a provided final class 'full-canvas xy-center'", () => {
    expect(
      shallow(<FullCanvas className='xy-center' />)
      .props()
      .className
    ).to.equal('full-canvas xy-center');
  });

  it(
    "matches a provided final style { overflow: 'hidden', width: '100%', " +
    "height: '100%', boxSizing: 'border-box', position: 'relative', " +
    "MozBoxSizing: 'border-box'}", () => {
    assert.deepEqual(
      shallow(<FullCanvas style={{position: 'relative'}} />)
      .props()
      .style,
      {
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        MozBoxSizing: 'border-box'
      }
    );
  });
});
