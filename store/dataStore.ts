import { create } from 'zustand';
import { CapacityData } from '../types/capacity';

interface DataState {
  capacityData: CapacityData[];
  loading: boolean;
  fetchData: () => Promise<void>;
}

// 模拟异步请求
const mockFetchCapacityData = (): Promise<CapacityData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { month: '1月', wind: 4200, solar: 5300 },
        { month: '2月', wind: 4350, solar: 5500 },
        { month: '3月', wind: 4580, solar: 5850 },
        { month: '4月', wind: 4720, solar: 6100 },
        { month: '5月', wind: 4900, solar: 6400 },
        { month: '6月', wind: 5120, solar: 6750 },
        { month: '7月', wind: 5280, solar: 7000 },
        { month: '8月', wind: 5450, solar: 7300 },
        { month: '9月', wind: 5620, solar: 7600 },
        { month: '10月', wind: 5800, solar: 7950 },
        { month: '11月', wind: 5980, solar: 8200 },
        { month: '12月', wind: 6150, solar: 8500 },
      ]);
    }, 1000); // 模拟 1秒延迟
  });
};

export const useDataStore = create<DataState>((set) => ({
  capacityData: [],
  loading: false,
  fetchData: async () => {
    set({ loading: true });
    try {
      // 这里替换为真实的 API 请求
      // const data = await request.get<CapacityData[]>('/api/capacity');
      const data = await mockFetchCapacityData();
      set({ capacityData: data, loading: false });
    } catch (error) {
      console.error('Failed to fetch data:', error);
      set({ loading: false });
    }
  },
}));

