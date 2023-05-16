import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon,MapPinIcon } from 'react-native-heroicons/outline'

const ResturantCard = ({
    id,
    imgUrl,
    genre,
    title,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat

}) => {
  return (
    <TouchableOpacity className='bg-white shadow-sm mr-3 mb-1 '>
        <Image source={{uri:imgUrl}}
        className='rounded-sm w-64 h-36'/>
        <View className='pb-4 px-3'>
            <Text className='font-bold pt-2 text-lg'>{title}</Text>
            <View className='flex-row space-x-1 items-center'>
                <StarIcon color='green' opacity={0.5} size={20}/>
                <Text className='text-green-600 text-xs'>{rating} .</Text>
                <Text className='text-gray-500' >{genre}</Text>
            </View>
            <View className='flex-row space-x-1 items-center'>
                <MapPinIcon color='gray' opacity={0.5} size={20}/>
                <Text className='text-gray-500' >Nearby . {address}</Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}

export default ResturantCard