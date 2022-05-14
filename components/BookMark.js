import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { COLORS, icons } from "../constants";

const BookMark = ({ style = { position: "absolute", top: 5, right: 15 } }) => {
  return (
    <TouchableOpacity style={{ ...style }}>
      <Image
        source={icons.bookmark_icon}
        resizeMode="contain"
        style={{ height: 25, width: 25, tintColor: COLORS.lightGray }}
      />
    </TouchableOpacity>
  );
};

export default BookMark;
