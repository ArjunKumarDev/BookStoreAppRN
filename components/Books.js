import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

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
      <View style={{ marginVertical: SIZES.base }}>
        <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
          {/* Book Cover */}
          <Image
            source={item?.bookCover}
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />

          <View style={{ marginLeft: SIZES.radius }}>
            <View>
              <Text style={[style.bookName, { ...FONTS.h3 }]}>
                {item?.bookName}
              </Text>
              <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
                {item?.author}
              </Text>
            </View>

            {/*  */}
            <View style={style.bookInfo}>
              <Image
                source={icons.page_filled_icon}
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
              />

              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray,
                  paddingHorizontal: SIZES.radius,
                }}
              >
                {item?.pageNo}
              </Text>

              <Image
                source={icons.read_icon}
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
              />

              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray,
                  paddingHorizontal: SIZES.radius,
                }}
              >
                {item?.readed}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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

const style = StyleSheet.create({
  bookName: {
    paddingRight: SIZES.padding,
    color: COLORS.white,
  },
  bookInfo: {
    flexDirection: "row",
    marginTop: SIZES.radius,
  },
});
