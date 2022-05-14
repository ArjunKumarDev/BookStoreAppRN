import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export default function Button() {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => console.log("Start Reading")}
    >
      <Text style={{ ...FONTS.h3, color: COLORS.white }}>Start Reading</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
  },
});
