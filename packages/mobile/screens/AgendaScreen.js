import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CreateEventScreen from "./CreateEventScreen";
import { Agenda } from "react-native-calendars";
import testIDs from "../testIDs";

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: undefined,
      showCreateEvent: false,
    };
  }

  render() {
    const firstEvent = {
      title: "First Event",
      description: "This is the first event",
    };

    return (
      <View style={{ flex: 1 }}>
        {this.state.showCreateEvent ? null : (
          <Agenda
            testID={testIDs.agenda.CONTAINER}
            items={this.state.items}
            loadItemsForMonth={this.loadItems}
            selected={"2017-05-16"}
            renderItem={this.renderItem}
            renderEmptyDate={this.renderEmptyDate}
            rowHasChanged={this.rowHasChanged}
            showClosingKnob={true}
          />
        )}

        {this.state.showCreateEvent && this.renderCreateEventScreen()}
      </View>
    );
  }
  getRandomTimeGap = () => {
    //just return a random number between 1 and 4
    return Math.floor(Math.random() * 4 + 1);
  };

  loadItems = (day) => {
    const items = this.state.items || {};
    const eventChoices = [
      {
        item: "Anna Bamtise",
        id: "JUVE",
      },
      {
        item: "Katya Borisova",
        id: "RM",
      },
      {
        item: "Gregor Wuend",
        id: "BR",
      },
      {
        item: "Evyn Sietsema",
        id: "PSG",
      },
      {
        item: "Max Brooksen",
        id: "FBM",
      },
      {
        item: "Jessica Peterson",
        id: "JUVE",
      },
    ];

    const getRandomStartTime = () => {
      const randomHours = Math.floor(Math.random() * 14) + 8; // Random hours between 8 and 21
      const randomMinutes = Math.floor(Math.random() * 60); // Random minutes between 0 and 59
      const startTime = new Date();
      startTime.setHours(randomHours);
      startTime.setMinutes(randomMinutes);
      return startTime;
    };

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        const timeGap = this.getRandomTimeGap();

        //make start time a random time between 8am and 10pm
        const randomStartTime = Math.floor(Math.random() * 14 + 8);
        //convert that random time to an actual date
        const startTime = new Date(randomStartTime);
        const startTimeHours = startTime.getHours();

        //Take that random time gap and add it to the current time to get the end time
        const endTime = time + timeGap * 60 * 60 * 1000;
        //Convert the end time to a string
        const strEndTime = this.timeToString(endTime);
        //start time and end time are now strings
        //strTime and strEndTime

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            const randomstartTime = getRandomStartTime();
            const startTimeHours = randomstartTime.getHours();

            const randomEventChoice =
              eventChoices[Math.floor(Math.random() * eventChoices.length)];
            items[strTime].push({
              name: `${randomEventChoice.item} is available!`,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
              timeGap: timeGap,
              time: randomstartTime,
              eventId: randomEventChoice.id,
            });
          }
        }
      }

      const firstEvent = items[Object.keys(items)[0]][0];
      firstEvent.item = "First event of the day";
      firstEvent.height = 100;
      firstEvent.timeGap = 1;

      console.log(firstEvent);

      const newItems = { ...items };

      this.setState({
        items: newItems,
      });
    }, 1000);
  };

  renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem} />;
  };

  renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";
    const backgroundColor = getRandomColor(); // Get a random pastel color

    const startTime = new Date(reservation.time);
    const endTime = new Date(
      startTime.getTime() + reservation.timeGap * 60 * 60 * 1000
    );

    const startTimeHours = `${startTime.getHours()}:${
      (startTime.getMinutes() < 10 ? "0" : "") + startTime.getMinutes()
    }`;
    const endTimeHours = `${endTime.getHours()}:${
      (endTime.getMinutes() < 10 ? "0" : "") + endTime.getMinutes()
    }`;

    console.log("reservation", reservation);

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: reservation.height, backgroundColor }]}
        onPress={() =>
          this.setState({
            showCreateEvent: true,
            selectedReservation: reservation,
          })
        }
      >
        <Text
          style={{fontFamily: "JetBrainsMono-Regular", fontSize, color }}
        >{`${reservation.name} (${startTimeHours} - ${endTimeHours})`}</Text>
      </TouchableOpacity>
    );
  };

  renderCreateEventScreen = () => {
    const { selectedReservation } = this.state;

    if (this.state.showCreateEvent) {
      return (
        <CreateEventScreen
          reservation={selectedReservation}
          eventArr={this.state.items}
          onClose={() => this.setState({ showCreateEvent: false })}
        />
      );
    }

    return null;
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is an empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}
const pastelGradientColors = [
  "#FFD1DC", // Misty Rose
  "#FFABAB", // Pale Red
  "#FFC3A0", // Deep Peach
  "#FF677D", // Bubble Gum
  "#D4A5A5", // Pastel Pink
  "#FFBCBC", // Rosy Pink
  "#FFDAC1", // Peach
  "#FFB997", // Light Apricot
  "#FFABAB", // Pale Red
  "#FFD3B6", // Light Salmon
  "#FFC3A0", // Deep Peach
  "#FFB997", // Light Apricot
  "#FFDDC1", // Apricot
  "#E9CBA8", // Pastel Orange
  "#FFABAB", // Pale Red
];

const gradients = [
  // Light Blue Gradient
  "#B4EAFB", // Light Sky Blue
  "#ADD8E6", // Light Blue
  "#87CEEB", // Sky Blue
  "#87CEFA", // Light Sky Blue

  // Pale Purple Gradient
  "#E6E6FA", // Lavender
  "#D8BFD8", // Thistle
  "#DDA0DD", // Plum
  "#EE82EE", // Violet

  // Lavender Gradient
  "#E6E6FA", // Lavender
  "#D1C1E0", // Mauve
  "#B19CD9", // Pastel Purple
  "#9370DB", // Medium Purple

  // Peach/Tan Gradient
  "#FFDAB9", // Peach Puff
  "#FFB366", // Light Apricot
  "#FFA07A", // Light Salmon
  "#FF7F50", // Coral
];

console.log(gradients);

console.log(pastelGradientColors);

const getRandomColor = () => {
  return pastelGradientColors[Math.floor(Math.random() * 15)];
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: "green",
  },
  dayItem: {
    marginLeft: 34,
  },
});

export default AgendaScreen;
