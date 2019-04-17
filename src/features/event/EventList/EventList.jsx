import React, { Component } from "react";
import EventListItem from "./EventListItem";
import { Button } from "semantic-ui-react";

class EventList extends Component {
  aqui() {
    console.log("EventList:", this.props);
  }

  render() {
    console.log("EventList.....this.props:", this.props);

    // Parâmetros são eventos...
    //              const { events } = this.props;
    //console.log(events);
    //console.log("ZERO------------", events[0]);
    return (
      <div>
        <h1>EventList</h1>
        <Button
          onClick={() => this.props.funToEditEvent(111)}
          content="Event Edit"
        />
        {this.props.events.map(xEvent => (
          <EventListItem
            key={xEvent.id}
            event={xEvent}
            funToEditEvent={() => this.props.funToEditEvent(xEvent)}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
