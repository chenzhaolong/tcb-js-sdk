declare module '*.json';
declare type Weixin = {
  setStorageSync(key: string, val: any): any;
  getStorageSync(key: string): any;
  removeStorageSync(key: string): any;
  clearStorageSync(): void;
  login(options: object): void;
  request(options: object): any;
  uploadFile(options: object): any;
  downloadFile(options: object): any;
};

// eslint-disable-next-line
declare global {
  interface Window {
    tcb: any;
  }
}

// eslint-disable-next-line
declare const wx: Weixin;

declare type KV<T> = {
  [key: string]: T;
};
