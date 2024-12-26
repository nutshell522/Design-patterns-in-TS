import { KitchenWorker, Barkeep, Chef, Order, DrinkOrder, SnackOrder, Waitress } from './Command';

/**
 * * 命令模式測試
 */
const CommandTest = () => {
  console.log('--- 命令模式測試 ---');

  // 開店前準備
  const snackChef = new Chef();
  const barkeep = new Barkeep();
  const snackOrder = new SnackOrder(snackChef);
  const drinkOrder = new DrinkOrder(barkeep);

  const cuteGirl = new Waitress();
  console.log('-- 客人點餐 --');

  // 開始營業 客人點餐
  cuteGirl.setOrder(snackOrder);
  cuteGirl.setOrder(snackOrder);
  cuteGirl.setOrder(drinkOrder);
  cuteGirl.setOrder(drinkOrder);

  // 飲料還沒賣完
  cuteGirl.setOrder(drinkOrder);
  console.log();

  // 取消一個點心
  console.log('-- 取消點心測試 --');
  cuteGirl.cancelOrder(snackOrder);

  // 點心又可以賣了
  cuteGirl.setOrder(snackOrder);
  console.log();

  console.log('-- 點餐完成，送到後廚通知廚師與搖飲料小弟 --');
  cuteGirl.notifyBaker();

  // 點心賣完了
  console.log();
  console.log('-- 點心庫存不足測試 --');
  cuteGirl.setOrder(snackOrder);

  console.log('--- ---');
};

export default CommandTest;
