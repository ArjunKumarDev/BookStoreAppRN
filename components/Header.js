import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";

export default function Header() {
  const profileData = {
    name: "Arjun",
    point: 200,
  };
  const [profile, setProfile] = useState(profileData);
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        alignItems: "center",
        height: 150,
      }}
    >
      {/* Greetings */}
      <View style={{ flex: 1 }}>
        <View style={{ marginRight: SIZES.padding }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            {profile.name}
          </Text>
        </View>
      </View>

      {/* Points */}
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          height: 40,
          paddingLeft: 3,
          paddingRight: SIZES.radius,
          borderRadius: 20,
        }}
        onPress={() => {
          console.log("Point");
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>

          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}
          >
            {profile.point} point
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
