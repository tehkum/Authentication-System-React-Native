import { View, Text, StyleSheet, SafeAreaView } from "react-native";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.logo}>Tehkum</Text>
      {/* <MenuIcon /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
});
