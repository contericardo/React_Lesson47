import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  // Life Cycle
  //-------------------------
  componentDidMount() {
    console.log("(componentDidMount)Selected Event:", this.props.selectedEvent);

    if (this.props.selectedEvent !== null) {
      console.log("(componentDidMount):", "NOT null !!!");
      this.setState({ event: this.props.selectedEvent });
    } else {
      // added ELSE...
      console.log("(componentDidMount):", "is null !!!");
      this.setState({ event: emptyEvent });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "(componentWillReceiveProps):selectedEvent",
      this.props.selectedEvent
    );
    console.log(
      "(componentWillReceiveProps):next event",
      nextProps.selectedEvent
    );
    //
    //
    if (nextProps.selectedEvent === null) {
      console.log("(componentWillReceiveProps):", "is null !!!");
      this.setState({
        event: emptyEvent
      });
    } else {
      this.setState({
        event: nextProps.selectedEvent
      });
    }
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({ newEvent });
  };

  render() {
    console.log(
      "(rendering)this.props.selectedEvent:",
      this.props.selectedEvent
    );

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={this.state.event.title}
              placeholder="Event Title."
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={this.state.event.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={this.state.event.city}
              placeholder="City event is taking place."
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={this.state.event.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={this.state.event.hostedBy}
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
