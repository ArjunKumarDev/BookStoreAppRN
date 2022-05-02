import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../constants";
import LineDivider from "./LineDivider";

export default function TagSection() {
  return (
    <View style={style.container}>
      <View style={style.tagContainer}>
        {/* Claim */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => console.log("claim")}
        >
          <View style={style.imgBox}>
            <Image
              source={icons.claim_icon}
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
            />
            <Text style={[style.tagTitle, { ...FONTS.body4 }]}>Claim</Text>
          </View>
        </TouchableOpacity>

        <LineDivider />

        {/* Point */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => console.log("point")}
        >
          <View style={style.imgBox}>
            <Image
              source={icons.point_icon}
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
            />
            <Text style={[style.tagTitle, { ...FONTS.body4 }]}>Get Point</Text>
          </View>
        </TouchableOpacity>

        <LineDivider />

        {/* Card */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => console.log("card")}
        >
          <View style={style.imgBox}>
            <Image
              source={icons.card_icon}
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
            />
            <Text style={[style.tagTitle, { ...FONTS.body4 }]}>My Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: SIZES.padding,
  },
  tagContainer: {
    flexDirection: "row",
    height: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
  imgBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tagTitle: {
    color: COLORS.white,
    marginLeft: SIZES.base,
  },
});
