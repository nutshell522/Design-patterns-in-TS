import { Adapter, BowArcher, Wizard } from './Adapter';

/**
 * * 轉接器模式測試
 */
const AdapterTest = () => {
  console.log('--- 轉接器模式測試 ---');

  console.log('我們需要火球才能把樹上的蜂窩砸爛，糟糕的是隊伍中沒有法師。');
  console.log('幸好隊伍中有一個弓箭手跟馬蓋先工具包，讓弓箭手也能發射火球。');

  const archer = new BowArcher();
  const wizard = new Adapter(archer);

  wizard.fireBall();

  console.log('--- ---');
};

export default AdapterTest;
