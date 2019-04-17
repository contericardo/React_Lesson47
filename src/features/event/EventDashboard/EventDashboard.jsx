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
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      events: eventsDashboardList,
      isOpen: false,
      selectedEvent: null
    };

    // BIND ...........................
    // .....   ..........this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  // Abre o form ao atualizar o "state"
  // --------------------------------------------------------
  handleFormOpen = () => {
    this.setState({ isOpen: true, selectedEvent: null });
  };

  // Fecha o form
  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  // Creates a new event...
  handleCreateEvent = newEvent => {
    newEvent.id = Math.random() * 100; // do not have cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({ events: updatedEvents, isOpen: false });
  };

  // Atualiza um evento
  //-----------------------
  handleUpdateEvent = eventToUpdate => {
    // for each
    const vetEventsUpdated = this.state.eventsDashboardList.map(aEvent => {
      if (eventToUpdate.id === aEvent.id) {
        return eventToUpdate;
      } else {
        return aEvent;
      }
    });
    this.setState({
      eventsDashboardList: vetEventsUpdated,
      isOpen: false,
      selectedEvent: null
    });
  };

  // Edit Event
  handleEditEvent = x => {
    console.log("(EventDashboard) handleEditEvent exect++++++", x);
    this.setState({ selectedEvent: x, isOpen: true });
  };

  render() {
    //console.log("EventDashBoard:", this.state.events);
    //console.log("handleEditEvent:", this.handleEditEvent);

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={this.state.events}
            funToEditEvent={this.handleEditEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <h1>Other Side...</h1>
          <Button
            name="Botao"
            onClick={this.handleFormOpen}
            positive
            content="Abre Formulário"
          />
          {this.state.isOpen && (
            <EventForm
              handleCancel={this.handleCancel}
              handleCreateEvent={this.handleCreateEvent}
              selectedEvent={this.state.selectedEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default EventDashboard;
