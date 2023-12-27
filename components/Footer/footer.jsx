import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "react-router-native";

export default function Footer() {
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.footerItem}>
        <Text>Footer</Text>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/contact">
          <Text>Contact</Text>
        </Link>
        <Link to="/login">
          <Text>login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "grey",
    width: "100%",
    padding: 15,
  },
  footerItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
