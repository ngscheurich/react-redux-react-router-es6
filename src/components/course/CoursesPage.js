import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  courseRow (course, i) {
    return <div key={i}>{course.title}</div>
  }

  redirectToAddCoursePage (event) {
    event.preventDefault()
    this.context.router.push('/course')
  }

  render () {
    return (
      <div className="container-fluid pt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>Courses</h1>
          <a
            href="/course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}>
            Add Course
          </a>
        </div>
        <CourseList courses={this.props.courses} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

CoursesPage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state, ownProps) {
  return { courses: state.courses }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
