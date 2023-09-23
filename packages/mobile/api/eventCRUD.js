import firestore from "@react-native-firebase/firestore";

// Function to create a new event
const createEvent = async (eventData) => {
  try {
    await firestore().collection("events").add(eventData);
    console.log("Event created successfully");
  } catch (error) {
    console.error("Error creating event: ", error);
  }
};

// Function to get all events, ideally use useUser.js instead
// That way you can get the events for a specific user and it will update automatically
// Whereas this is just a one time fetch
const getAllEvents = async () => {
  try {
    const querySnapshot = await firestore().collection("events").get();
    const events = [];

    querySnapshot.forEach((documentSnapshot) => {
      events.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });

    return events;
  } catch (error) {
    console.error("Error getting events: ", error);
    return [];
  }
};

// Function to update an event
const updateEvent = async (eventId, eventData) => {
  try {
    await firestore().collection("events").doc(eventId).update(eventData);
    console.log("Event updated successfully");
  } catch (error) {
    console.error("Error updating event: ", error);
  }
};

// Function to delete an event
const deleteEvent = async (eventId) => {
  try {
    await firestore().collection("events").doc(eventId).delete();
    console.log("Event deleted successfully");
  } catch (error) {
    console.error("Error deleting event: ", error);
  }
};

export { createEvent, getAllEvents, updateEvent, deleteEvent };

// Creating a new event
/*
import { createEvent } from './eventCRUD.js';

const newEvent = {
  eventName: 'Sample Event',
  userId: 'user123',
  friendsInvited: ['friend1', 'friend2'],
  // other event data
};

createEvent(newEvent);
*/

// Getting all events
/*
import { getAllEvents } from './eventCRUD.js';

const getAllEventsExample = async () => {
  const events = await getAllEvents();
  console.log('All events:', events);
};

getAllEventsExample();
*/

// Updating an event
/*
import { updateEvent } from './eventCRUD.js';

const eventIdToUpdate = 'your_event_id'; // Replace with the actual event ID
const updatedEventData = {
  eventName: 'Updated Event Name',
  // other updated event data
};

updateEvent(eventIdToUpdate, updatedEventData);
*/

// Deleting an event
/*
import { deleteEvent } from './eventCRUD.js';

const eventIdToDelete = 'your_event_id'; // Replace with the actual event ID

deleteEvent(eventIdToDelete);
*/
