class AppointmentForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Make a new Appointment</h2>
        <form>
          <input name="Title" placeholder="Appointment Title" />
          <input name="Appt_Time" placeholder="Appointment Date and Time" />
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
    )
  }
}
