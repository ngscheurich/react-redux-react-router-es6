import expect from 'expect'
import courseReducer from './courseReducer'
import * as actions from '../actions/courseActions'

describe('Course reducers', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [{ title: 'A' }]
    const newCourse = { title: 'B' }
    const action = actions.createCourseSuccess(newCourse)

    const newState = courseReducer(initialState, action)

    expect(newState.length).toEqual(2)
    expect(newState[0].title).toEqual('A')
    expect(newState[1].title).toEqual('B')
  })

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      { id: 1, title: 'A' },
      { id: 2, title: 'B' }
    ]
    const course = { id: 1, title: 'C' }
    const action = actions.updateCourseSuccess(course)

    const newState = courseReducer(initialState, action)
    const updatedCourse = newState.find(a => a.id === course.id)
    const untouchedCourse = newState.find(a => a.id === 2)

    expect(newState.length).toEqual(2)
    expect(updatedCourse.title).toEqual('C')
    expect(untouchedCourse.title).toEqual('B')
  })
})
