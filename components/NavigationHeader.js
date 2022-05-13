import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { FONTS, icons, SIZES } from "../constants";

export default function NavigationHeader({ book }) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: SIZES.base }}
      >
        <Image
          source={icons.back_arrow_icon}
          resizeMode="contain"
          style={{ height: 25, width: 25, tintColor: book.navTintColor }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h3, color: book.navTintColor }}>
          Book Detail
        </Text>
      </View>

      <TouchableOpacity style={{ marginRight: SIZES.base }}>
        <Image
          source={icons.more_icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: book.navTintColor,
            alignSelf: "flex-end",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: SIZES.radius,
    height: 80,
    alignItems: "flex-end",
  },
});
