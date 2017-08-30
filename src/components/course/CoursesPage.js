import React from 'react'

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      course: { title: '' }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange (event) {
    let course = this.state.course
    course.title = event.target.value
    this.setState({ course: course })
  }

  onClickSave () {
    console.log(`Saving ${this.state.course.title}`)
  }

  render () {
    return (
      <div className="container-fluid mt-4">
        <h1>Courses</h1>

        <input
          placeholder="Add course"
          className="form-control"
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          className="btn btn-primary"
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    )
  }
}

export default CoursesPage
