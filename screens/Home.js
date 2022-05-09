import React, { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import {
  Books,
  CategoryHeader,
  Header,
  MyBooks,
  TagSection,
} from "../components";
import { COLORS, SIZES } from "../constants";
import { myBooksData } from "../utils/booksData";
import { categoriesData } from "../utils/categoriesData";

export default function Home() {
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setselectedCategory] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <View>
        <Header />
        <TagSection />
      </View>

      {/* Body section */}
      <ScrollView style={SIZES.radius}>
        {/* My Books */}
        <View>
          <MyBooks myBooks={myBooks} />
        </View>

        {/* Categories */}
        <View style={{ marginTop: SIZES.padding }}>
          <CategoryHeader
            categories={categories}
            setselectedCategory={setselectedCategory}
            selectedCategory={selectedCategory}
          />
          <Books
            books={myBooks}
            categories={categories}
            selectedCategory={selectedCategory}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
