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
      isOpen: false,
      eventToShow: null
    };
  }

  // Open form...
  // --------------------------------------------------------
  handleNewEvent = () => {
    this.setState({ isOpen: true, eventToShow: emptyEvent });
  };

  // Closes form
  handleCancel = () => {
    this.setState({ isOpen: false, eventToShow: emptyEvent });
  };

  // Creates a new event...
  handleCreateEvent = newEvent => {
    console.log("(handleCreateEvent) Starting -------------------------");
    newEvent.id = Math.round(Math.random() * 1000); // do not have cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    console.log("(handleCreateEvent) newEvent:", newEvent);

    const vetEvents = this.state.events;
    console.log("(handleCreateEvent  ) vetEvents BEFORE PUSH...:", vetEvents);
    vetEvents.push(newEvent);
    console.log("(handleCreateEvent) vetEvents AFTER:", vetEvents);

    this.setState({ events: vetEvents, isOpen: false, eventToShow: null });

    //const updatedEvents = [...this.state.events, newEvent];
    //
    //
  };

  // Atualiza um evento
  //-----------------------
  handleUpdateEvent = eventToUpdate => {
    // for each
    const vetEventsUpdated = this.state.eventsDashboardList.map(event => {
      if (event.id === eventToUpdate.id) {
        return Object.assign({}, eventToUpdate);
      } else {
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

  // Shows Event
  handleShowEvent = event => {
    this.setState({ eventToShow: event, isOpen: true });
  };

  render() {
    //console.log("EventDashBoard:", this.state.events);
    //console.log("handleEditEvent:", this.handleEditEvent);

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={this.state.events}
            funToEditEvent={this.handleShowEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <h1>Other Side...</h1>
          <Button
            name="Botao"
            onClick={this.handleNewEvent}
            positive
            content="New Event"
          />
          {this.state.isOpen && (
            <EventForm
              handleCancel={this.handleCancel}
              handleCreateEvent={this.handleCreateEvent}
              eventToShow={this.state.eventToShow}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default EventDashboard;
