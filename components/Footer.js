import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import home from '../assets/Home.png'
import book from '../assets/Book.png'
import bars from '../assets/Bars.png'
import user from '../assets/User.png'
import { useNavigation } from '@react-navigation/native'
const Footer = () => {
    const navigation = useNavigation();
  return (
    <View className='flex flex-row justify-around border-t-[1px] p-3'>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} className='items-center'>
            <Image  source={home} />
            <Text  className='font-bold'>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Courses")} className='items-center'>
            <Image source={book} />
            <Text className='font-bold'>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity className='items-center'>
            <Image source={bars} />
            <Text className='font-bold'>Rank</Text>
        </TouchableOpacity>
        <TouchableOpacity className='items-center'>
             <Image source={user} />
            <Text className='font-bold'>Profile</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Footer