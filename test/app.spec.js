'use strict'

/* eslint-env jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { App } from '../src/ducks/components/App'

Enzyme.configure({ adapter: new Adapter() })

describe('App component only', () => {
  it('should be mounted correctly', () => {
    const initApp = jest.fn()
    const component = shallow(<App initApp={initApp} />).getElement()
    expect(component).toMatchSnapshot()
  })
})
