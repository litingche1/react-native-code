import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';

export default function ProtocolScreen() {
  const [formData, setFormData] = useState({
    name: '',
    idCard: '',
    address: '',
    capacity: '',
    gridDate: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = () => {
    if (!isAgreed) {
      Alert.alert('提示', '请先阅读并同意入网协议');
      return;
    }
    if (!formData.name || !formData.idCard || !formData.capacity) {
      Alert.alert('提示', '请填写必要的申请信息');
      return;
    }
    Alert.alert('提交成功', '您的光伏入网申请已提交，等待审核。');
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">光伏入网申请</Text>

      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <Text className="text-base font-bold mb-4 text-gray-800 border-l-4 border-blue-500 pl-2.5">申请人信息</Text>
        <TextInput
          className="h-12 border border-gray-200 rounded-lg px-4 mb-4 bg-gray-50 text-sm"
          placeholder="姓名/企业名称"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        <TextInput
          className="h-12 border border-gray-200 rounded-lg px-4 mb-4 bg-gray-50 text-sm"
          placeholder="身份证号/统一社会信用代码"
          value={formData.idCard}
          onChangeText={(text) => setFormData({ ...formData, idCard: text })}
        />
        <TextInput
          className="h-12 border border-gray-200 rounded-lg px-4 bg-gray-50 text-sm"
          placeholder="安装地址"
          value={formData.address}
          onChangeText={(text) => setFormData({ ...formData, address: text })}
        />
      </View>

      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <Text className="text-base font-bold mb-4 text-gray-800 border-l-4 border-blue-500 pl-2.5">项目信息</Text>
        <TextInput
          className="h-12 border border-gray-200 rounded-lg px-4 mb-4 bg-gray-50 text-sm"
          placeholder="申请容量 (kW)"
          keyboardType="numeric"
          value={formData.capacity}
          onChangeText={(text) => setFormData({ ...formData, capacity: text })}
        />
        <TextInput
          className="h-12 border border-gray-200 rounded-lg px-4 bg-gray-50 text-sm"
          placeholder="预计并网日期 (YYYY-MM-DD)"
          value={formData.gridDate}
          onChangeText={(text) => setFormData({ ...formData, gridDate: text })}
        />
      </View>

      <View className="flex-row items-center mb-6 px-1">
        <Switch
          value={isAgreed}
          onValueChange={setIsAgreed}
          trackColor={{ false: '#767577', true: '#3b82f6' }}
        />
        <Text className="flex-1 ml-2.5 text-sm text-gray-600">
          我已阅读并同意《分布式光伏发电项目并网调度协议》
        </Text>
      </View>

      <TouchableOpacity 
        className={`h-12 rounded-lg justify-center items-center mb-8 shadow-sm ${!isAgreed ? 'bg-gray-300' : 'bg-blue-500 active:bg-blue-600'}`}
        onPress={handleSubmit}
        disabled={!isAgreed}
      >
        <Text className="text-white text-lg font-bold">提交申请</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
