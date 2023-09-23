import React, { useEffect, useState } from "react";
import {
  Dimensions,
  PixelRatio,
  StyleSheet,
  Alert,
  Text,
  Button,
  Platform,
  SafeAreaView,
  TextInput,
  View,
  Pressable
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import DateTimePicker from '@react-native-community/datetimepicker';
import { normalizeWidth, normalizeHeight } from "./Responsive";
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
    let hours = badTime.getHours();
    if (badTime.getHours() >= 12) {
      timeOfDay = " PM";
      if (badTime.getHours() > 12){
        hours -= 12;
      }
    } else if (badTime.getHours() === 0){
      hours = 12;
    }
    return hours + ":" + badTime.getMinutes() + timeOfDay;
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
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    )
  }
  const onStartDateTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDateObject;
    setStartShow(Platform.ANDROID === 'android');
    if (selectedDate < endDateObject) {
      setStartDateObject(currentDate);
      setStartDate(convertDate(currentDate));
      setStartTime(convertTime(currentDate));
    } else {
      showInvalidDateRangeAlert("The selected date, " + selectedDate + ", is after the current end date, " + endDateObject + ".");
    }
  }

  const onEndDateTimeChange = (event, selectedDate) => {
    setEndShow(Platform.ANDROID === 'android');
    const currentDate = selectedDate || endDateObject;
    if (selectedDate > startDateObject) {
      setEndDateObject(currentDate);

      setEndDate(convertDate(currentDate));
      setEndTime(convertTime(currentDate));
    } else {
      showInvalidDateRangeAlert("The selected date, " + currentDate + ", is before the current start date, " + startDateObject + ".");
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
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.eventName}
          onChangeText={setEventName}
          value={eventName}
          editable
          maxLength={40}
          placeholder="Add Event Name"
        />
        <TextInput
          onChangeText={setDescription}
          value={description}
          editable
          multiline
          maxLength={250}
          placeholder="Description"
          style={styles.input}
        />
      </View>
      <View>
        <View stlye={styles.datetime}>
          <Pressable onPress={() => startShowMode('date')}><Text style={styles.input}>{startDate}</Text></Pressable>
          <Pressable onPress={() => startShowMode('time')}><Text style={styles.input}>{startTime}</Text></Pressable>
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
        </View>
        {/*<View stlye={styles.datetime}>*/}
        {/*  <Pressable style={styles.date} onPress={() => endShowMode('date')}><Text style={styles.input}>{endDate}</Text></Pressable>*/}
        {/*  <Pressable style={styles.time} onPress={() => endShowMode('time')}><Text style={styles.input}>{endTime}</Text></Pressable>*/}
        {/*  {endShow && (*/}
        {/*    <DateTimePicker*/}
        {/*      testID='dateTimePicker'*/}
        {/*      value={endDateObject}*/}
        {/*      mode={mode}*/}
        {/*      minimumDate={new Date()}*/}
        {/*      is24Hours={false}*/}
        {/*      display='default'*/}
        {/*      onChange={onEndDateTimeChange}*/}
        {/*    />)}*/}
        {/*</View>*/}
      </View>
      <View>
        <TextInput
          onChangeText={setLocation}
          value={location}
          editable
          maxLength={60}
          placeholder="Location"
          style={styles.input}
        />
      </View>
      <View>
        <Text>Invited friends:</Text>

      </View>
    </SafeAreaView>

  );
}
  const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
      margin: 0,
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    eventName: {
      fontSize: normalizeHeight(40),
      margin: 10
    },
    input : {
      fontSize: normalizeHeight(20),
      margin: 10,
    },
    date : {
      backgroundColor: '#DDD',
      padding: 0,
    },
    time : {
      backgroundColor: '#DDD',
      padding: 0,
    },
    datetime : {
      flexDirection: 'column-reverse',
      flexWrap: 'wrap',
      borderColor: 'black',
      borderWidth: 2,
      alignContent: "flex-start",
      backgroundColor: '#000',
    }
  });

