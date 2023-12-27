import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Homepage from "./pages/home/Homepage";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ContactPage from "./pages/contact/ContactPage";
import Login from "./pages/Login/login";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <StatusBar style="auto" />
        <Footer />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
