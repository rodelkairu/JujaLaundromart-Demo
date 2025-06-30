//app/Services.js
import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const services = [
  { id: 1, name: "Dry Cleaning", price: 10 },
  { id: 2, name: "Garment Repair", price: 15 },
  { id: 3, name: "Laundry & Folding", price: 8 },
];

const Services = () => {
  const navigation = useNavigation();

  const handleViewDetails = (serviceId) => {
    navigation.navigate("ServiceDetails", { id: serviceId });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Available Services</Text>
        {services.map((service) => (
          <View key={service.id} style={styles.buttonContainer}>
            <Button
              title={`${service.name} - $${service.price}`}
              onPress={() => handleViewDetails(service.id)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const handleServiceSelect = (service) => {
  addToCart({ ...service, quantity: 1 }); // or open details page
  navigation.navigate("Profile");
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#f9f9f9",
  },
  container: {
    width: "90%",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 8,
  },
});

export default Services;