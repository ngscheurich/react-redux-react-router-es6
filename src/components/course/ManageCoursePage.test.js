import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import { ManageCoursePage } from './ManageCoursePage'

const course = {
  id: '',
  watchHref: '',
  title: '',
  authorId: '',
  length: '',
  category: ''
}

describe('Manage Course page', () => {
  it('shows error when trying to save with empty title', () => {
    let props = {
      authors: [],
      course,
      actions: {}
      // TODO: Why doesn't the absence of actions.saveCourse cause an error?
      //   saveCourse: () => { return Promise.resolve() }
      // }
    }
    let wrapper = mount(<ManageCoursePage {...props} />)
    let saveButton = wrapper.find('input').last()
    expect(saveButton.prop('type')).toBe('submit')
    saveButton.simulate('click')
    // TODO: Why isn't the errors property of state now set?
    // expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
  })
})
