import { COLORS, icons } from "../constants";
import { Image, TouchableOpacity } from "react-native";

import React from "react";

export default function BookMark({
  style = { position: "absolute", top: 5, right: 15 },
}) {
  return (
    <TouchableOpacity style={{ ...style }}>
      <Image
        source={icons.bookmark_icon}
        resizeMode="contain"
        style={{ height: 25, width: 25, tintColor: COLORS.lightGray }}
      />
    </TouchableOpacity>
  );
}
