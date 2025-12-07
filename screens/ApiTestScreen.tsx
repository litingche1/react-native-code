import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import request from '../utils/request';

export default function ApiTestScreen() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('等待请求...');
  const [status, setStatus] = useState<string>('');

  const handleRequest = async (method: 'GET' | 'POST') => {
    setLoading(true);
    setResult('请求中...');
    setStatus('');

    try {
      let response;
      // 使用一个公开的测试 API
      const baseUrl = 'https://jsonplaceholder.typicode.com';

      if (method === 'GET') {
        // 临时覆盖 baseURL 进行测试
        response = await request.get(`${baseUrl}/posts/1`);
      } else {
        response = await request.post(`${baseUrl}/posts`, {
          title: 'foo',
          body: 'bar',
          userId: 1,
        });
      }

      setStatus('请求成功 ✅');
      setResult(JSON.stringify(response, null, 2));
    } catch (error: any) {
      setStatus('请求失败 ❌');
      setResult(error.message || '未知错误');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 p-5 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-2.5 text-gray-800">API 请求测试</Text>
      <Text className="text-sm text-gray-500 text-center mb-8">使用 utils/request.ts 封装的方法</Text>

      <View className="flex-row justify-between mb-5">
        <TouchableOpacity 
          className="flex-1 h-12 rounded-lg justify-center items-center mx-1.5 shadow-sm bg-blue-500 active:bg-blue-600 disabled:opacity-50"
          onPress={() => handleRequest('GET')}
          disabled={loading}
        >
          <Text className="text-white text-base font-bold">发送 GET 请求</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-1 h-12 rounded-lg justify-center items-center mx-1.5 shadow-sm bg-emerald-500 active:bg-emerald-600 disabled:opacity-50"
          onPress={() => handleRequest('POST')}
          disabled={loading}
        >
          <Text className="text-white text-base font-bold">发送 POST 请求</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-white rounded-xl p-4 flex-1 min-h-[300px] shadow-sm">
        <Text className="text-base font-bold mb-2.5 text-gray-800">请求状态: {status}</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#3b82f6" className="mt-12" />
        ) : (
          <ScrollView className="bg-slate-800 p-4 rounded-lg flex-1">
            <Text className="text-cyan-200 font-mono text-xs">{result}</Text>
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}
