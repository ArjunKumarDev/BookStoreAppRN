import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { FONTS, SIZES } from "../constants";

export default function Cover({ book }) {
  return (
    <View style={style.container}>
      <Image
        source={book.bookCover}
        resizeMode="contain"
        style={{ flex: 1, height: "auto", width: 150 }}
      />

      {/* Book Name and Author */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ ...FONTS.h2, color: book.navTintColor }}>
          {book.bookName}
        </Text>
        <Text style={{ ...FONTS.body3, color: book.navTintColor }}>
          {book.author}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 5,
    paddingTop: SIZES.padding2,
    alignItems: "center",
  },
});
