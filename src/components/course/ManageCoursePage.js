import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import { authorsFormattedForSelect } from '../../selectors/selectors'
import CourseForm from './CourseForm'
import toastr from 'toastr'

export class ManageCoursePage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    }

    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  updateCourseState (event) {
    let field = event.target.name
    let course = Object.assign({}, this.state.course)
    course[field] = event.target.value
    return this.setState({course})
  }

  courseFormIsValid () {
    let formIsValid = true
    let errors = {}

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.'
      formIsValid = false
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  saveCourse (event) {
    event.preventDefault()

    if (!this.courseFormIsValid()) return

    this.setState({saving: true})
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error)
        this.setState({saving: false})
      })
  }

  redirect () {
    this.setState({saving: false})
    toastr.success('Course saved')
    this.context.router.push('/courses')
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: nextProps.course})
    }
  }

  render () {
    return (
      <div className="container-fluid pt-4">
        <h1 className="mb-3">Manage Course</h1>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
          allAuthors={this.props.authors} />
      </div>
    )
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

function getCourseById (courses, id) {
  let course = courses.filter(course => course.id === id)
  if (course.length) return course[0]
  return null
}

function mapStateToProps (state, ownProps) {
  let courseId = ownProps.params.id
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }

  return {
    course,
    authors: authorsFormattedForSelect(state.authors)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
