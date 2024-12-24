import Singleton from './Singleton';

/**
 * * 單例模式測試
 */
const SingletonTest = () => {
  // * 這裡會回傳同一個 instance
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  // * 比較兩個 instance 是否相同
  console.log('--- 單例模式測試：instance1 === instance2 ---');
  console.log(instance1 === instance2); // true
  console.log('--- ---');
};

export default SingletonTest;
