'use strict'

/* eslint-env jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { tMock } from '../../../../jestLib/I18n'
import { Header } from 'ducks/apps/components/ApplicationPage/Header'

import mockApp from '../../_mockPhotosRegistryVersion'

Enzyme.configure({ adapter: new Adapter() })

window.location.assign = jest.fn()

describe('ApplicationPage header component', () => {
  it('should be rendered correctly provided app', () => {
    const component = shallow(
      <Header t={tMock} parent='/myapps' {...mockApp.manifest} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should be rendered correctly provided app with broken icon and no editor', () => {
    const appProps = Object.assign({}, mockApp.manifest)
    appProps.icon = ''
    appProps.editor = ''
    const component = shallow(
      <Header t={tMock} parent='/myapps' {...appProps} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should handle the click on open installed app button', () => {
    const appProps = Object.assign({}, mockApp.manifest)
    appProps.installed = true
    appProps.icon = '<svg></svg>'
    appProps.installedAppLink = '#'
    const component = shallow(
      <Header t={tMock} parent='/myapps' {...appProps} />
    )
    component.find('button[onClick]').simulate('click')
    expect(window.location.assign.mock.calls.length).toBe(1)
    expect(window.location.assign.mock.calls[0][0]).toBe('#')
  })
})
