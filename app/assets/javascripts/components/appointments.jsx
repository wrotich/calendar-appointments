class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Team Standup Meeting',
      time: 'Tomorrow at 9am'
    };
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange (event) {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <AppointmentForm title={this.state.title}
          time={this.state.time}
          handleChange={this.handleChange} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
};
