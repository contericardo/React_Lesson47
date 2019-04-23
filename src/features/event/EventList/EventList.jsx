import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    // console.log("EventList.....this.props:", this.props);

    return (
      <div>
        <h1>EventList</h1>
        {this.props.events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={() => this.props.onEventOpen(event)}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
