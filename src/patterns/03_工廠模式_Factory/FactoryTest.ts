import { TrainingCamp, ArcherTrainingCamp, WarriorTrainingCamp, Adventurer, Warrior, Archer } from './Factory';
/**
 * * 工廠模式測試
 */
const factoryTest = () => {
  console.log('--- 工廠模式測試：---');

  // * 弓箭手訓練營
  const archerTrainingCamp: TrainingCamp = new ArcherTrainingCamp();
  const archer: Adventurer = archerTrainingCamp.trainAdventurer();

  // * 戰士訓練營
  const warriorTrainingCamp: TrainingCamp = new WarriorTrainingCamp();
  const warrior: Adventurer = warriorTrainingCamp.trainAdventurer();

  // * 判斷訓練出的冒險者類型
  console.log('Archer 的 Type:', archer.getType());
  console.log('Warrior 的 Type:', warrior.getType());

  console.log('--- ---');
};
export default factoryTest;
