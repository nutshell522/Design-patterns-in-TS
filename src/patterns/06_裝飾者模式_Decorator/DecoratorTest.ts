import { Lancer, TitleStrong, TitleAgile, TitleFire, Adventurer } from './Decorator';

/**
 * * 裝飾者模式測試
 */
const DecoratorTest = (): void => {
  console.log('--- 裝飾者模式測試 ---');

  // 沒有任何稱號的冒險者
  const NAME = 'Jacky';
  const lancer: Adventurer = new Lancer(NAME);
  console.log(`-- 長槍兵 ${NAME} 參上 ---`);
  lancer.attack();

  console.log();
  console.log(`-- 取得強壯稱號的${NAME} --`);
  const sJacky = new TitleStrong(lancer);
  sJacky.attack();

  console.log();
  console.log(`-- 取得敏捷稱號的${NAME} --`);
  const aJacky = new TitleAgile(sJacky);
  aJacky.attack();

  console.log();
  console.log(`-- 取得燃燒稱號的${NAME} --`);
  const fJacky = new TitleFire(aJacky);
  fJacky.attack();

  // 稱號可以重複
  console.log();
  console.log(`-- ${NAME}決定變得非常強壯 --`);
  const ssJacky = new TitleStrong(fJacky);
  ssJacky.attack();

  console.log('--- ---');
};

export default DecoratorTest;
