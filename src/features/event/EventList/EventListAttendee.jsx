import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    //    console.log("EventListAtendee");
    //    console.log(attendee);
    return (
      <List.Item>
        {attendee.id} {"-"}
        <Image as="a" size="mini" circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}

export default EventListAttendee;
