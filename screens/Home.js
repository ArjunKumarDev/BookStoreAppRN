import {
  Books,
  CategoryHeader,
  Header,
  MyBooks,
  TagSection,
} from "../components";
import { COLORS, SIZES } from "../constants";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { categoriesData } from "../utils/categoriesData";
import { myBooksData } from "../utils/booksData";

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
