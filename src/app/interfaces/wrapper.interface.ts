import { AxiosRequestConfig } from 'axios';

export interface AxiosWrapper {
    config?: AxiosRequestConfig;
    endpoint?: string
}