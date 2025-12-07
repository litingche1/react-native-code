import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
};

export default function RegisterScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      Alert.alert('错误', '请填写完整信息');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('错误', '两次密码不一致');
      return;
    }
    Alert.alert('成功', '注册成功，请登录', [
      { text: '确定', onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <View className="flex-1 justify-center px-5 bg-white">
      <Text className="text-3xl font-bold text-center mb-10 text-gray-800">创建账号</Text>
      
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

      <TextInput
        className="h-12 border border-gray-200 rounded-lg px-4 mb-5 text-base bg-gray-50"
        placeholder="确认密码"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        className="bg-emerald-400 h-12 rounded-lg justify-center items-center mb-5 shadow-sm active:bg-emerald-500"
        onPress={handleRegister}
      >
        <Text className="text-white text-lg font-bold">注 册</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-blue-500 text-center text-base">已有账号？返回登录</Text>
      </TouchableOpacity>
    </View>
  );
}
