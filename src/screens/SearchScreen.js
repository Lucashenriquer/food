import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [load, setLoad] = useState(true);
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  useEffect(() => {
    searchApi("pasta").then(() => setLoad(false));
  }, []);

  return !load ? (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          setLoad(true);
          searchApi(term).then(() => {
            setTerm("");
            setLoad(false);
          });
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Real Expensive"
        />
      </ScrollView>
    </View>
  ) : (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default SearchScreen;
