import { NormalAttack, SkillAttack, UseItem, Adventurer } from './Strategy';

/**
 * * 策略模式測試
 */
const StrategyTest = (): void => {
  console.log('--- 策略模式測試 ---');

  // * 冒險者
  const adventurer: Adventurer = new Adventurer();

  // 史萊姆使用普通攻擊就可以
  console.log('出現史萊姆>>>');
  adventurer.choiceStrategy(new NormalAttack());
  adventurer.attack();
  console.log(' ');

  // 厲害的敵人，需要使用技能攻擊
  console.log('出現巨大的史萊姆>>>');
  adventurer.choiceStrategy(new SkillAttack());
  adventurer.attack();
  console.log(' ');

  // 不死殭屍，只怕火焰，使用道具
  console.log('出現不死殭屍>>>');
  adventurer.choiceStrategy(new UseItem());
  adventurer.attack();

  console.log('--- ---');
};

export default StrategyTest;
