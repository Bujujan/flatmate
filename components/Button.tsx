import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type ButtonProps = {
    title: string;
  };

const Button = ( { title}: ButtonProps) => {
  return (
    <TouchableOpacity className='bg-blue-600 px-6 py-5 rounded-xl'>
        <Text className='text-white'>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

