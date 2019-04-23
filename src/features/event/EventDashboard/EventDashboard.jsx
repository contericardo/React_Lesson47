import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "./../EventList/EventList";
import EventForm from "./../EventForm/EventForm";
const eventsDashboardList = [
  {
    id: "1",
    title: "Trip to Tower of London.",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem London Tower ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum Punch and Judy Pub dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom (from the PUB)",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob !!!!!!!!!!!",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

const emptyEvent = { title: "", date: "", city: "", venue: "", hostedBy: "" };

class EventDashboard extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      events: eventsDashboardList,
      isOpen: true,
      selectedEvent: null
    };
  }

  // Open form...
  // selectedEvent is the empty event
  // --------------------------------------------------------
  handleNewEvent = () => {
    console.log("(handleNewEvent-1)");
    this.setState({ isOpen: true, selectedEvent: emptyEvent });
    console.log("(handleNewEvent-2) selectedEvent:", this.state.selectedEvent);
  };

  // Closes form
  handleCancel = () => {
    this.setState({ isOpen: false, selectedEvent: emptyEvent });
  };

  // Creates a new event...
  createEvent = newEvent => {
    newEvent.id = Math.round(Math.random() * 1000); // do not have cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    console.log("(handleCreateEvent) newEvent.id:", newEvent.id);

    // copies events from state
    const vetEvents = this.state.events;
    console.log("(handleCreateEvent ) vetEvents BEFORE PUSH:", vetEvents);
    // pushes new event
    vetEvents.push(newEvent);
    console.log("(handleCreateEvent) vetEvents AFTER PUSH:", vetEvents);

    this.setState({ events: vetEvents, isOpen: false, selectedEvent: null });
  };

  // Updates an event
  //-----------------------
  updateEvent = updatedEvent => {
    console.log("(handleUpdateEvent)", this.state.events);

    // Separated creation os new list from updating the state
    // Creating new list
    const vetEventsUpdated = this.state.events.map(event => {
      if (event.id === updatedEvent.id) {
        console.log("----Update", updatedEvent);
        return Object.assign({}, updatedEvent);
      } else {
        console.log("Do not Update", event);
        return event;
      }
    });

    // updating the events
    this.setState({
      eventsDashboardList: vetEventsUpdated,
      isOpen: false,
      selectedEvent: null
    });
  };

  // Shows Event when clicked in the list
  handleOpenEvent = eventToOpen => {
    this.setState({ selectedEvent: eventToOpen, isOpen: true });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={this.state.events}
            onEventOpen={this.handleOpenEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button
            name="Botao"
            onClick={this.handleNewEvent}
            positive
            content="New Event"
          />
          {this.state.isOpen && (
            <EventForm
              handleCancel={this.handleCancel}
              createEvent={this.createEvent}
              updateEvent={this.updateEvent}
              selectedEvent={this.state.selectedEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default EventDashboard;
