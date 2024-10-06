import { View, Text, SafeAreaView, FlatList, Image, ScrollView } from 'react-native'
import React from 'react';
import { sliderImages } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DATA = sliderImages;

export default function ImageSlider() {
  return (
    <SafeAreaView>
    <ScrollView style={{flex:1}}>
    <FlatList 
     horizontal={true}
     data={DATA}
     renderItem={({item, index}) => (
       <View key={index}>
          <Image source={item} className="w-[120px] h-[150px] object-cover rounded-xl m-2" />
      </View>
     )}
     />
     </ScrollView>  
    </SafeAreaView>
  )
}

