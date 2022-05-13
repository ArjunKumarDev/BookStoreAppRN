import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BookCover, BookDescription } from "../components";
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
      <BookDescription />
    </View>
  ) : (
    <></>
  );
}
