import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../constants";

export default function MyBooks({ myBooks }) {
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
        }}
        onPress={() =>
          navigation.navigate("BookDetail", {
            book: item,
          })
        }
      >
        {/* Book Cover */}
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{
            width: 180,
            height: 250,
            borderRadius: 20,
          }}
        />

        {/* Book Info */}
        <View
          style={{
            marginTop: SIZES.radius,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.clock_icon}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
          >
            {item.lastRead}
          </Text>

          <Image
            source={icons.page_icon}
            style={{
              marginLeft: SIZES.radius,
              width: 20,
              height: 20,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
          >
            {item.completion}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={style.header}>
        <Text style={style.headerTitle}>My Books</Text>
        <TouchableOpacity onPress={() => console.log("see more")}>
          <Text style={style.subTitle}>See More</Text>
        </TouchableOpacity>
      </View>

      {/* My Books */}
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <FlatList
          data={myBooks}
          renderItem={renderItem}
          keyExtractor={(item) => `${item?.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  subTitle: {
    color: COLORS.lightGray,
    fontWeight: "bold",
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
});
