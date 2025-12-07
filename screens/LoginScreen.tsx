import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTab: undefined;
};

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123456');
  const { login } = useAuthStore();

  const handleLogin = () => {
    if (username === 'admin' && password === '123456') {
      // 模拟登录成功
      login({ username: 'Admin', role: '系统管理员' }, 'mock-token-123456');
      navigation.replace('MainTab');
    } else {
      Alert.alert('登录失败', '用户名或密码错误 (试用: admin/123456)');
    }
  };

  return (
    <View className="flex-1 justify-center px-5 bg-white">
      <Text className="text-3xl font-bold text-center mb-10 text-gray-800">欢迎登录</Text>
      
      <TextInput
        className="h-12 border border-gray-200 rounded-lg px-4 mb-5 text-base bg-gray-50"
        placeholder="用户名"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        className="h-12 border border-gray-200 rounded-lg px-4 mb-5 text-base bg-gray-50"
        placeholder="密码"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        className="bg-blue-500 h-12 rounded-lg justify-center items-center mb-5 shadow-sm active:bg-blue-600"
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-bold">登 录</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-blue-500 text-center text-base">没有账号？去注册</Text>
      </TouchableOpacity>
    </View>
  );
}
