import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BookCover, BookDescription, Button } from "../components";
import BookMark from "../components/BookMark";
import { COLORS } from "../constants";

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
          <BookMark />
          <Button />
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
}
