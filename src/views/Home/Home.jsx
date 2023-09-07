import React, { useEffect, useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { format, sub } from 'date-fns';
import { PostImage } from '../../types';
import Header from '../../components/Header/header';
import fetchApi from '../../../utils/fetch';
import TodaysImage from '../../components/TodaysImages/TodaysImage';

const Home = () => {
    const [todaysImage, setTodaysImage] = useState({});

useEffect(() => {
const loadTodaysImage = async () => {
try{
 const todaysImageResponse = await fetchApi();
setTodaysImage(todaysImageResponse);
}catch(error) {
    console.error(error);
    setTodaysImage({});
}
};
const loadLast5DaysImages = async () => {
    try {
    const date = new Date();
    const todaysDate = format(date, 'yyyy-MM-dd');
    const fiveDaysAgoDate = format(sub(date,{days: 5}), 'yyyy-MM-dd');

    }catch(error) {
        console.error(error);
    }
}
loadTodaysImage().catch(null);
loadLast5DaysImages().catch(null);

}, []);

console.log(todaysImage);
    return (
        <View style={styles.container}>
           <Header/>
           <TodaysImage 
            url={todaysImage.url}
            title={todaysImage.title}
           date={todaysImage.date}
           
           />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,

    }


});


export default Home;