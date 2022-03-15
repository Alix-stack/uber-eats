import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTabe, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 40 }}>
      <HeaderButtons
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTabe={activeTabe}
        setActiveTab={setActiveTab}
      />
      <HeaderButtons
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTabe={activeTabe}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButtons = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTabe === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTabe === props.text ? "white" : "black",
        fontSize: 16,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
