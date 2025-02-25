import { Link } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='font-pextrabold text-3xl'>Welcome to FlatMate!</Text>
      <StatusBar style="auto" />
      <Button title='Explore The App!'></Button>
      
    </View>
  );
}
