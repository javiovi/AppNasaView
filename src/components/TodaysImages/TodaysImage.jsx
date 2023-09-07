import React from "react";
import { View, Text, StyleSheet, Image, Button,} from "react-native";

const TodaysImage = ({date, title, url }) => {
    return (
        <View style={styles.container}> 
          <Image source={{uri: url}}  style={styles.image}/>
           <Text style={styles.title}>{title}</Text>
           <Text style={styles.date}>{date}</Text>
          <View style={styles.buttonContainer}>
           <Button title= "View" />
</View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginHorizontal: 24,
        marginVertical: 16,
        borderRadius: 32,
        padding: 16,
      },
    
      image: {
        width: "100%",
        height: 190,
        borderWidth: 2,
        borderColor: '#fff',
     borderRadius:32,
      },
      title: {
        color: "white",
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
      },
      date:{
        color: "white",
        fontSize: 16,
       },

       buttonContainer: {
       alignItems: "center",
        borderRadius: 32,
       }
   
})
export default TodaysImage;