import { Lancer, Subject, Association, Bard, Gunman, Adventurer } from './Observer';

/**
 * * 觀察者模式測試
 */
const ObserverTest = () => {
  console.log('--- 觀察者模式測試 ---');

  // 冒險者們
  const lancer1 = new Lancer('Jacky');
  const lancer2 = new Lancer('Seven');
  const bard = new Bard('Lee');
  const gunman = new Gunman('龍五');

  // 冒險者協會
  const association: Subject = new Association();
  association.add(lancer1);
  association.add(lancer2);
  association.add(bard);
  association.add(gunman);

  console.log();
  console.log('-- 協會派送簡單的任務 --');
  association.sendQuestions('run');

  console.log();
  console.log('-- 協會派送複雜的任務 --');
  association.sendQuestions('run run run, run for your life');

  // Seven 不想接到通知了
  console.log();
  association.remove(lancer2);
  console.log('-- 系統提示：Seven 已退出冒險者協會 --');
  console.log('-- 協會派送複雜的任務 --');
  association.sendQuestions('run run run, run for your life');

  console.log('--- ---');
};

export default ObserverTest;
