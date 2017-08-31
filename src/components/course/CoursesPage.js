import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPage extends React.Component {
  courseRow (course, i) {
    return <div key={i}>{course.title}</div>
  }

  render () {
    return (
      <div className="container-fluid pt-4">
        <h1 className="mb-3">Courses</h1>
        <CourseList courses={this.props.courses} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
