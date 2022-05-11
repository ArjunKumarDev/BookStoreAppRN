import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { COLORS, icons } from "../constants";

const BookMark = () => {
  return (
    <TouchableOpacity style={{ position: "absolute", top: 5, right: 15 }}>
      <Image
        source={icons.bookmark_icon}
        resizeMode="contain"
        style={{ height: 25, width: 25, tintColor: COLORS.lightGray }}
      />
    </TouchableOpacity>
  );
};

export default BookMark;
