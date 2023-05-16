import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const CategoryCard = ({title,imgUrl}) => {
  return (
    <TouchableOpacity className="mr-2 relative">
        <Image source={{uri:imgUrl}}
        className="h-20 w-20 rounded"
        />

      <Text className="font-bold left-2 bottom-1 text-white absolute">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard