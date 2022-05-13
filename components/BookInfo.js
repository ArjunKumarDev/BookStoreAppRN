import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import LineDivider from "./LineDivider";

export default function BookInfo({ book }) {
  return (
    <View style={style.container}>
      {/* Rating */}
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
      </View>

      <LineDivider />

      {/* Pages */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
          alignItems: "center",
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>
          Number of Page
        </Text>
      </View>

      <LineDivider />

      {/* Language */}
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
          {book.language}
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
