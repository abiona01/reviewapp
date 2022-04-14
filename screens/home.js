import {useState} from "react"
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeScreen({navigation}) {
    const [reviews, setReviews] = useState([
        {title: "Review 1", rating: 5, body: "This is a review", key: "1"},
        {title: "Review 2", rating: 4, body: "This is a review", key: "2"},
        {title: "Review 3", rating: 3, body: "This is a review", key: "3"},
    ])
    return (
        <View style={globalStyles.container}>
        <FlatList 
        data={reviews}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
        )}
        />
        
        </View>
    )
    }

   

