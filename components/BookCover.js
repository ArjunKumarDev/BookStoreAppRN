import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import BookInfo from "./BookInfo";
import Cover from "./Cover";
import NavigationHeader from "./NavigationHeader";

export default function BookCover({ book = {} }) {
  return (
    <View style={{ flex: 4 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={style.bgImage}
        />
      </View>

      <View style={[style.overLay, { backgroundColor: book.backgroundColor }]}>
        <NavigationHeader book={book} />
        <Cover book={book} />
        <BookInfo book={book} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overLay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
