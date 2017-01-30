import React from 'react'

export default class NewDiscussionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      body: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state)
    this.props.onSubmit()
  }

  render() {
    return(
      <div className="ui big form">
        <div className="field">
          <label>Topic</label>
          <input
            name="topic"
            type="text"
            placeholder="Topic"
            value={this.state.topic}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label>Body</label>
          <textarea
            name="body"
            placeholder="Topic"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button
            className="ui submit button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}
