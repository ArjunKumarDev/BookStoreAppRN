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
import BookMark from "./BookMark";
import { useNavigation } from "@react-navigation/native";

export default function Books({ categories = [], selectedCategory }) {
  const [storeBooks, setStoreBooks] = useState([]);

  const navigation = useNavigation();

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
    return (
      <View style={{ marginVertical: SIZES.base }}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row" }}
          onPress={() =>
            navigation.navigate("BookDetail", {
              book: item,
            })
          }
        >
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

            {/* Genre */}
            <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
              {item?.genre.includes("Adventure") && (
                <View
                  style={[
                    style.genreContainer,
                    { backgroundColor: COLORS.darkGreen },
                  ]}
                >
                  <Text style={{ ...FONTS.body4, color: COLORS.lightGreen }}>
                    Adventure
                  </Text>
                </View>
              )}

              {item?.genre.includes("Romance") && (
                <View
                  style={[
                    style.genreContainer,
                    { backgroundColor: COLORS.darkRed },
                  ]}
                >
                  <Text style={{ ...FONTS.body4, color: COLORS.lightRed }}>
                    Romace
                  </Text>
                </View>
              )}

              {item?.genre.includes("Drama") && (
                <View
                  style={[
                    style.genreContainer,
                    { backgroundColor: COLORS.darkBlue },
                  ]}
                >
                  <Text style={{ ...FONTS.body4, color: COLORS.lightBlue }}>
                    Drama
                  </Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
        {/*  */}
        <BookMark />
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
  genreContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.base,
    marginRight: SIZES.base,
    height: 40,
    borderRadius: SIZES.radius,
  },
});
