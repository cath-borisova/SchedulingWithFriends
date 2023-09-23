import React, { useEffect, useState } from "react";
import { Alert, Text, Button, Platform, SafeAreaView, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateEventScreen() {
  const [eventName, setEventName] = React.useState(''); //Add friend name
  const [description, setDescription] = React.useState('');
  const [location, setLocation] = React.useState('');


  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  const week = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  const convertDate = (badDate) => {
    return week[badDate.getDay()] + ", " + months[badDate.getMonth() + 1] + " " + badDate.getDate() + ", " + badDate.getFullYear();

  }

  const convertTime = (badTime) => {
    let timeOfDay = " AM";
    if (badTime.getHours() >= 12) {
      timeOfDay = " PM"
    }
    return badTime.getHours() - 12 + ":" + badTime.getMinutes() + timeOfDay;
  }

  //Date/time
  const [startDateObject, setStartDateObject] = useState(new Date()); // TO DO: Pass date in
  const [endDateObject, setEndDateObject] = useState(new Date()); // TO DO: Pass date in
  const [mode, setMode] = useState('date');
  const [startShow, setStartShow] = useState(false);
  const [endShow, setEndShow] = useState(false);
  const [startDate, setStartDate] = useState(convertDate(startDateObject));
  const [startTime, setStartTime] = useState(convertTime(startDateObject));
  const [endDate, setEndDate] = useState(convertDate(endDateObject));
  const [endTime, setEndTime] = useState(convertTime(endDateObject));

  const showInvalidDateRangeAlert = (message) => {
    Alert.alert(
      'Alert Title',
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }
  const onStartDateTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDateObject;
    setStartShow(Platform.ANDROID === 'android');
    if(selectedDate < endDateObject){
      setStartDateObject(currentDate);
      setStartDate(convertDate(currentDate));
      setStartTime(convertTime(currentDate));
    } else {
      showInvalidDateRangeAlert("The selected date, "+selectedDate+", is after the current end date, "+endDateObject+".");
    }
  }

  const onEndDateTimeChange = (event, selectedDate) => {
    setEndShow(Platform.ANDROID === 'android');
    const currentDate = selectedDate || endDateObject;
    if( selectedDate > startDateObject){
      setEndDateObject(currentDate);

      setEndDate(convertDate(currentDate));
      setEndTime(convertTime(currentDate));
    } else {
      showInvalidDateRangeAlert("The selected date, "+ currentDate+ ", is before the current start date, " + startDateObject+".");
    }

  }

const startShowMode = (currentMode) => {
    setStartShow(true);
    setMode(currentMode);
}

const endShowMode = (currentMode) => {
    setEndShow(true);
    setMode(currentMode);
  }


  return (
    <SafeAreaView>
      <View>
        <TextInput
          onChangeText={setEventName}
          value={eventName}
          editable
          maxLength={40}
          placeholder="Add Event Name"
          style={{padding: 10}}
          />
        <TextInput
          onChangeText={setDescription}
          value={description}
          editable
          multiline
          maxLength={250}
          placeholder="Description"
          style={{padding: 10}}
        />
      </View>
      <View>
        <Button title={startDate} onPress={()=>startShowMode('date')}/>
        <Button title={startTime} onPress={()=>startShowMode('time')}/>
        <Button title={endDate} onPress={()=>endShowMode('date')}/>
        <Button title={endTime} onPress={()=>endShowMode('time')}/>
      {startShow && (
        <DateTimePicker
          testID='dateTimePicker'
          value={startDateObject}
          mode={mode}
          minimumDate={new Date()}
          is24Hours={false}
          display='default'
          onChange={onStartDateTimeChange}
      />)}
      {endShow && (
        <DateTimePicker
          testID='dateTimePicker'
          value={endDateObject}
          mode={mode}
          minimumDate={new Date()}
          is24Hours={false}
          display='default'
          onChange={onEndDateTimeChange}
        />)}
      </View>
      <View>
        <TextInput
          onChangeText={setLocation}
          value={location}
          editable
          maxLength={60}
          placeholder="Location"
          style={{padding: 10}}
        />
      </View>
      <View>
        <Text>Invited friends:</Text>

      </View>
      </SafeAreaView>

  );
}
