import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = { title: "", date: "", city: "", venue: "", hostedBy: "" };

class EventForm extends Component {
  state = {
    eventBeingShown: emptyEvent
  };

  // Life Cycle
  //-------------------------
  componentDidMount() {
    console.log("(componentDidMount.):", this.props.eventToShow);

    if (this.props.eventToShow === null) {
      console.log("(componentDidMount):", "is null !!!");
      this.setState({ eventBeingShown: emptyEvent });
    } else {
      this.setState({ eventBeingShown: this.props.eventToShow });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("(componentWillReceiveProps):", this.props.eventToShow);
    if (nextProps.eventToShow === null) {
      console.log("(componentWillReceiveProps):", "is null !!!");
      this.setState({
        eventBeingShown: emptyEvent
      });
    } else {
      this.setState({
        eventBeingShown: nextProps.eventToShow
      });
    }
  }

  // Other Methods
  //-------------------------

  // Submeteu o formulário
  onFormSubmit = evento => {
    evento.preventDefault();
    this.props.handleCreateEvent(this.state.eventBeingShown);
    this.setState({
      eventBeingShown: emptyEvent
    });
  };

  // Mudou um campo
  onInputChange = evt => {
    const newEvent = this.state.eventBeingShown;
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
              value={this.state.eventBeingShown.title}
              placeholder="Event Title."
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={this.state.eventBeingShown.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={this.state.eventBeingShown.city}
              placeholder="City event is taking place."
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={this.state.eventBeingShown.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={this.state.eventBeingShown.hostedBy}
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
