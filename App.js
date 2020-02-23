import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RecyclerList from "./RecyclerList";
import data from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <RecyclerList
        style={styles.container}
        name="Ashutosh"
        src={data}
        onRefresh={event => {
          console.log("event : ", event.nativeEvent);
          alert("OnRefresh");
        }}
        onClick={event => {
          console.log("event : ", event.nativeEvent);
          alert("Data Clicked : ");
        }}
        onLongClick={event => {
          console.log("ON LONG CLICK CALLCED : ", event.nativeEvent);
          alert("Loing click");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});
