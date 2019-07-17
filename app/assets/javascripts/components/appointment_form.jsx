class AppointmentForm extends React.Component {

  render() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.props.handleChange} />
          <input name='time' placeholder='Date and Time'
            value={this.props.time}
            onChange={this.props.handleChange}  />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
};
