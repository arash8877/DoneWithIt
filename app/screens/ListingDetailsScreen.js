import { View, Image, StyleSheet } from "react-native";
import CustomText from "../components/CustomText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{listing.title}</CustomText>
        <CustomText style={styles.price}>DKK {listing.price}</CustomText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="Arash Abdollahi"
          subTitle="5 Items"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});
