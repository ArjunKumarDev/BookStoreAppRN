import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Header, MyBooks, TagSection } from "../components";
import { COLORS, SIZES } from "../constants";
import { myBooksData } from "../utils/booksData";

export default function Home() {
  const [myBooks, setMyBooks] = useState(myBooksData);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <View style={{ height: 300 }}>
        <Header />
        <TagSection />
      </View>

      {/* Body section */}
      <ScrollView style={SIZES.radius}>
        <View>
          <MyBooks myBooks={myBooks} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
