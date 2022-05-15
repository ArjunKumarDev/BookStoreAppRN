import React, { useEffect, useState } from "react";
import { BookCover, BookDescription, BookMark, Button } from "../components";

import { COLORS, SIZES } from "../constants";
import { View, StyleSheet } from "react-native";

export default function BookDetail({ route }) {
  console.log(route, "route");
  const [book, setBook] = useState(null);

  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  return book ? (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <BookCover book={book} />
      <BookDescription book={book} />
      <View style={{ height: 70, marginBottom: 30 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <BookMark style={style.bookMarkStyle} />
          <Button />
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
}

const style = StyleSheet.create({
  bookMarkStyle: {
    width: 60,
    backgroundColor: COLORS.secondary,
    marginLeft: SIZES.padding,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
  },
});
