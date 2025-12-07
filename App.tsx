import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import "./global.css";

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import ProtocolScreen from './screens/ProtocolScreen';
import ProfileScreen from './screens/ProfileScreen';
import ApiTestScreen from './screens/ApiTestScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Statistics') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Protocol') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Statistics" 
        component={StatisticsScreen} 
        options={{ 
          title: '装机容量',
          headerStyle: { backgroundColor: '#3b82f6' },
          headerTintColor: '#fff',
        }} 
      />
      <Tab.Screen 
        name="Protocol" 
        component={ProtocolScreen} 
        options={{ 
          title: '入网协议',
          headerStyle: { backgroundColor: '#3b82f6' },
          headerTintColor: '#fff',
        }} 
      />
      <Tab.Screen 
        name="ApiTest" 
        component={ApiTestScreen} 
        options={{ 
          title: 'API测试',
          headerStyle: { backgroundColor: '#3b82f6' },
          headerTintColor: '#fff',
          // 隐藏 API 测试入口，仅供开发调试使用
          // tabBarButton: () => null,
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          title: '我的',
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: '注册' }} 
        />
        <Stack.Screen 
          name="MainTab" 
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
