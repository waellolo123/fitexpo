import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function BodyPartCard({item, index}) {
  return (
    <View>
      <TouchableOpacity
      style={{width: wp(44), height: wp(52)}}
      className="flex justify-end p-4 mb-4"
      >
        <Image 
        source={item.image} 
        resizeMode='cover' 
        style={{width: wp(44), height: wp(52)}} 
        className="rounded-xl"
        />
      </TouchableOpacity>
    </View>
  )
}