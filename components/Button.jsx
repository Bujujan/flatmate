import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'



const Button = ( { title }) => {
  return (
    <TouchableOpacity className='bg-blue-600 px-6 py-5 rounded-xl'>
        <Text className='text-white font-psemibold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

