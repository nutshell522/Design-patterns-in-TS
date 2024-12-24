import TrainingCamp from './SimpleFactory';

/**
 * * 簡單工廠模式測試
 */
const SimpleFactoryTest = () => {
  const trainingCamp = new TrainingCamp();

  console.log('--- 簡單工廠模式測試：---');

  const archer = trainingCamp.trainAdventurer('archer');
  console.log(archer.getType());

  const warrior = trainingCamp.trainAdventurer('warrior');
  console.log(warrior.getType());

  console.log('--- ---');
};

export default SimpleFactoryTest;
