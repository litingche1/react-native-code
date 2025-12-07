import React, { useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { useDataStore } from '../store/dataStore';

const screenWidth = Dimensions.get('window').width;

export default function StatisticsScreen() {
  const { capacityData, loading, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading || capacityData.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100 p-4">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="mt-2.5 text-gray-500">加载数据中...</Text>
      </View>
    );
  }

  const lastMonthData = capacityData[capacityData.length - 1];

  const pieData = [
    {
      name: '风电',
      population: lastMonthData.wind,
      color: '#3b82f6',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '光伏',
      population: lastMonthData.solar,
      color: '#f97316',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">装机容量统计分析</Text>

      {/* 饼图 */}
      <View className="bg-white rounded-xl p-4 mb-5 shadow-sm">
        <Text className="text-lg font-bold mb-4 text-gray-800">能源占比 (12月)</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 60}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* 折线图 */}
      <View className="bg-white rounded-xl p-4 mb-5 shadow-sm">
        <Text className="text-lg font-bold mb-4 text-gray-800">年度增长趋势</Text>
        <LineChart
          data={{
            labels: capacityData.map(d => d.month.replace('月', '')),
            datasets: [
              { data: capacityData.map(d => d.wind), color: () => '#3b82f6', strokeWidth: 2 },
              { data: capacityData.map(d => d.solar), color: () => '#f97316', strokeWidth: 2 },
            ],
            legend: ['风电', '光伏']
          }}
          width={screenWidth - 60}
          height={220}
          chartConfig={{
            backgroundColor: 'transparent',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
            labelColor: () => '#666',
            propsForBackgroundLines: {
              strokeWidth: 1,
              stroke: '#e0e0e0',
              strokeDasharray: '',
            },
          }}
          bezier
          withInnerLines={true}
          withOuterLines={false}
          style={{ borderRadius: 16, marginVertical: 8, backgroundColor: 'transparent' }}
        />
      </View>

      {/* 柱状图 */}
      <View className="bg-white rounded-xl p-4 mb-5 shadow-sm">
        <Text className="text-lg font-bold mb-4 text-gray-800">近半年对比</Text>
        <BarChart
          data={{
            labels: capacityData.slice(-6).map(d => d.month),
            datasets: [{ data: capacityData.slice(-6).map(d => d.wind + d.solar) }],
          }}
          width={screenWidth - 60}
          height={220}
          yAxisLabel=""
          yAxisSuffix="万"
          chartConfig={{
            backgroundColor: 'transparent',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
            labelColor: () => '#666',
            barPercentage: 0.7,
            propsForBackgroundLines: {
              strokeWidth: 1,
              stroke: '#e0e0e0',
            },
          }}
          withInnerLines={false}
          fromZero={true}
          style={{ borderRadius: 16, marginVertical: 8, backgroundColor: 'transparent' }}
        />
      </View>

      {/* 表格 */}
      <View className="bg-white rounded-xl p-4 mb-5 shadow-sm">
        <Text className="text-lg font-bold mb-4 text-gray-800">详细数据 (万千瓦)</Text>
        <View className="border border-gray-200 rounded-lg overflow-hidden">
          <View className="flex-row bg-indigo-50 p-3">
            <Text className="flex-1 font-bold text-center text-indigo-600">月份</Text>
            <Text className="flex-1 font-bold text-center text-indigo-600">风电</Text>
            <Text className="flex-1 font-bold text-center text-indigo-600">光伏</Text>
            <Text className="flex-1 font-bold text-center text-indigo-600">总计</Text>
          </View>
          {capacityData.map((item, index) => (
            <View key={index} className={`flex-row p-3 border-t border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
              <Text className="flex-1 text-center text-gray-800">{item.month}</Text>
              <Text className="flex-1 text-center text-gray-800">{item.wind}</Text>
              <Text className="flex-1 text-center text-gray-800">{item.solar}</Text>
              <Text className="flex-1 text-center text-gray-800 font-bold">{item.wind + item.solar}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
