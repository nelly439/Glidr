import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "./SearchInput";
import SearchResultsList from "./SearchResultsList";
import EmptySearch from "./EmptySearch";

import useProductSearch from "@/hooks/useProductSearch";

export default function SearchScreen() {
  const {
    query,
    setQuery,
    searchResults,
  } = useProductSearch();

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        value={query}
        onChangeText={setQuery}
      />

      <SearchResultsList
        products={searchResults}
      />

      <EmptySearch query={query} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
});