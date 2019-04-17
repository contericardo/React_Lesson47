import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = { title: "", date: "", city: "", venue: "", hostedBy: "" };

class EventForm extends Component {
  //
  // state
  //-------------------------
  state = {
    eventoSendoExibido: emptyEvent
  };

  // Life Cycle
  //-------------------------
  componentDidMount() {
    console.log("...");

    if (this.props.selectedEvent !== null) {
      this.setState({ eventoSendoExibido: this.props.selectedEvent });
    } else {
      this.setState({
        eventoSendoExibido: emptyEvent
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.eventoSendoExibido !== nextProps.selectedEvent) {
      this.setState({
        eventoSendoExibido: nextProps.selectedEvent || emptyEvent
      });
      console.log("RECEIVE,registrado", this.state.eventoSendoExibido);
    }
  }

  // Other Methods
  //-------------------------

  // Submeteu o formulário
  onFormSubmit = evento => {
    evento.preventDefault();
    this.props.handleCreateEvent(this.state.eventoSendoExibido);
  };

  // Mudou um campo
  onInputChange = evt => {
    const newEvent = this.state.eventoSendoExibido;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({ newEvent });
    console.log("EventForm, this.state:", this.state);
  };

  render() {
    // const { handleCancel } = this.props;  (poderia ser assim...)

    console.log("(EventForm):", this.props);

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={this.state.eventoSendoExibido.title}
              placeholder="Event Title."
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={this.state.eventoSendoExibido.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={this.state.eventoSendoExibido.city}
              placeholder="City event is taking place."
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={this.state.eventoSendoExibido.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={this.state.eventoSendoExibido.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit !!!
          </Button>
          <Button type="button" onClick={this.props.handleCancel}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default EventForm;
