import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { SIZES } from "../constants";

export default function Books({ categories = [], selectedCategory }) {
  const [storeBooks, setStoreBooks] = useState([]);

  useEffect(() => {
    categoryBasedBooks();
  }, [selectedCategory]);

  const categoryBasedBooks = () => {
    let selectedCategoryBooks = categories.filter(
      (d) => d?.id === selectedCategory
    );

    console.log(selectedCategoryBooks[0].books, "selected");

    setStoreBooks(selectedCategoryBooks[0]?.books);
  };

  const renderItem = ({ item }) => {
    console.log(item, "item");
    return (
      <View>
        <Text style={{ color: "red", fontSize: 30 }}>{item?.bookName}</Text>
      </View>
    );
  };

  return (
    <View
      style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}
    >
      {storeBooks?.length > 0 ? (
        <FlatList
          data={storeBooks}
          renderItem={renderItem}
          keyExtractor={(item) => `${item?.id}`}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={{ color: "green" }}>Loading...</Text>
      )}
    </View>
  );
}
