import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    // 重置路由到登录页
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-blue-500 p-8 items-center pb-12">
        <View className="w-20 h-20 rounded-full bg-white/30 justify-center items-center mb-2.5 border-2 border-white">
          <Text className="text-3xl font-bold text-white">{user?.username?.charAt(0) || 'A'}</Text>
        </View>
        <Text className="text-2xl font-bold text-white mb-1">{user?.username || '未登录'}</Text>
        <Text className="text-sm text-white/80">{user?.role || '访客'}</Text>
      </View>

      <View className="bg-white -mt-5 mx-4 rounded-xl p-1.5 shadow-sm">
        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-100 active:bg-gray-50">
          <Text className="text-base text-gray-800">个人资料</Text>
          <Text className="text-xl text-gray-300">›</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-100 active:bg-gray-50">
          <Text className="text-base text-gray-800">系统设置</Text>
          <Text className="text-xl text-gray-300">›</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center p-4 active:bg-gray-50">
          <Text className="text-base text-gray-800">关于我们</Text>
          <Text className="text-xl text-gray-300">›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        className="bg-white mx-4 mt-5 p-4 rounded-lg items-center shadow-sm active:bg-gray-50"
        onPress={handleLogout}
      >
        <Text className="text-red-500 text-base font-bold">退出登录</Text>
      </TouchableOpacity>
    </View>
  );
}
