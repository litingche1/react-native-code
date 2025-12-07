import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Alert } from 'react-native';

// 定义接口返回数据的标准格式
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

class Request {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在这里可以添加 token，例如从 Zustand store 或 AsyncStorage 获取
        // const token = useAuthStore.getState().token;
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        const { code, message, data } = response.data;
        
        // 假设 200 是成功状态码
        // 兼容 JSONPlaceholder 等标准 REST API，它们可能不返回 code 字段
        if (response.status === 200 || response.status === 201) {
          return data;
        } else if (code === 200) {
          return data; // 直接返回 data 部分
        } else {
          // 处理业务错误
          Alert.alert('提示', message || '请求失败');
          return Promise.reject(new Error(message || 'Error'));
        }
      },
      (error) => {
        // 处理网络错误或 HTTP 状态码错误
        let message = '网络请求失败';
        if (error.response) {
          switch (error.response.status) {
            case 401:
              message = '未授权，请登录';
              // 这里可以处理登出逻辑
              break;
            case 403:
              message = '拒绝访问';
              break;
            case 404:
              message = '请求资源不存在';
              break;
            case 500:
              message = '服务器错误';
              break;
            default:
              message = `请求错误: ${error.response.status}`;
          }
        }
        Alert.alert('错误', message);
        return Promise.reject(error);
      }
    );
  }

  // 封装常用方法
  public request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config);
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config);
  }
}

// 创建默认实例
const request = new Request({
  baseURL: 'https://mock.apifox.cn/m1/your-mock-id', // 替换为你的 API 地址
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;

