class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: "Team Standup Meeting",
      time: "Tomorrow at 9am"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let title = this.state.title;
    let appt_time = this.state.time;
    console.log("title", title, "time", appt_time);
    $.ajax({
      type: "POST",
      url: "/appointments",
      data: { title: title, appt_time: appt_time },
      dataType: "text",
      contentType: "application/json"
    }).fail(error => {
      console.log("data", error);
    });
  }

  render() {
    return (
      <div>
        <AppointmentForm
          title={this.state.title}
          time={this.state.time}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
}
