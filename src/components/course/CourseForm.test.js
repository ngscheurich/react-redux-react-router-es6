import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

function setup (saving = false) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onChange: () => {},
    onSave: () => {},
    allAuthors: []
  }

  return shallow(<CourseForm {...props} />)
}

describe('Course form', () => {
  it('renders form and h1', () => {
    let wrapper = setup()
    expect(wrapper.find('form').length).toBe(1)
  })

  it('save button is labeled "Save" when not saving', () => {
    let wrapper = setup(false)
    let saveButton = wrapper.find('input[type="submit"]')
    expect(saveButton.props().value).toBe('Save')
  })

  it('save button is labeled "Saving…" saving', () => {
    let wrapper = setup(true)
    let saveButton = wrapper.find('input[type="submit"]')
    expect(saveButton.props().value).toBe('Saving…')
  })

  it('save button is disabled saving', () => {
    let wrapper = setup(true)
    let saveButton = wrapper.find('input[type="submit"]')
    expect(saveButton.props().disabled).toBe(true)
  })
})
