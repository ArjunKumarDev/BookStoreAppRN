import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { categoriesData } from "../utils/categoriesData";
export default function CategoryHeader() {
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setselectedCategory] = useState(1);

  const renderItem = ({ item }) => {
    console.log("catitem", item);
    return (
      <TouchableOpacity
        style={style.categoryHeader}
        onPress={() => setselectedCategory(item?.id)}
      >
        {selectedCategory == item.id && (
          <Text
            style={{ color: COLORS.white, fontWeight: "bold", ...FONTS.h3 }}
          >
            {item.categoryName}
          </Text>
        )}
        {selectedCategory != item.id && (
          <Text
            style={{ color: COLORS.lightGray, fontWeight: "bold", ...FONTS.h3 }}
          >
            {item.categoryName}
          </Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container}>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
        horizontal
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: SIZES.padding,
  },
  categoryHeader: {
    flex: 1,
    marginRight: SIZES.padding,
  },
});
