import * as AbstractFactory from './AbstractFactory';
/**
 * * 抽象工廠模式測試
 */
// * 測試工廠是否能正確生產裝備
const abstractFactoryTest = () => {
  console.log('--- 抽象工廠模式測試 ---');

  // 幫弓箭手訓練營生產裝備
  const archerFactory: AbstractFactory.EquipFactory = new AbstractFactory.ArcherEquipFactory();
  const archerWeapon: AbstractFactory.Weapon = archerFactory.productWeapon();
  const archerClothes: AbstractFactory.Clothes = archerFactory.productClothes();

  // 皮甲的防禦力為5，弓的攻擊為10，範圍為10
  if (!(archerClothes.getDef() == 5 && archerWeapon.getAtk() === 10 && archerWeapon.getRange() === 10)) {
    console.log('弓箭手裝備生產錯誤');
  }

  // 幫戰士訓練營生產裝備
  const warriorFactory: AbstractFactory.EquipFactory = new AbstractFactory.WarriorEquipFactory();
  const warriorWeapon: AbstractFactory.Weapon = warriorFactory.productWeapon();
  const warriorClothes: AbstractFactory.Clothes = warriorFactory.productClothes();

  // 皮甲的防禦力為5，長劍的攻擊為10，範圍為1
  if (!(warriorClothes.getDef() == 5 && warriorWeapon.getAtk() === 10 && warriorWeapon.getRange() === 1)) {
    console.log('戰士裝備生產錯誤');
  }

  // 弓箭手訓練營
  const archerTrainingCamp: TrainingCamp = new ArcherTrainingCamp();
  // 訓練一個弓箭手
  const archer: Adventurer = archerTrainingCamp.trainAdventurer();

  // 戰士訓練營
  const warriorTrainingCamp: TrainingCamp = new WarriorTrainingCamp();
  // 訓練一個戰士
  const warrior: Adventurer = warriorTrainingCamp.trainAdventurer();

  archer.display();
  warrior.display();

  console.log('--- ---');
};

// * 冒險者
abstract class Adventurer {
  protected weapon: AbstractFactory.Weapon | null = null;
  protected clothes: AbstractFactory.Clothes | null = null;
  public getWeapon() {
    return this.weapon;
  }
  public setWeapon(weapon: AbstractFactory.Weapon): void {
    this.weapon = weapon;
  }
  public getClothes() {
    return this.clothes;
  }
  public setClothes(clothes: AbstractFactory.Clothes): void {
    this.clothes = clothes;
  }
  public abstract display(): void;
}

// * 弓箭手
class Archer extends Adventurer {
  public display(): void {
    console.log('我是弓箭手，裝備；');
    this.weapon?.display();
    this.clothes?.display();
  }
}

// * 戰士
class Warrior extends Adventurer {
  public display(): void {
    console.log('我是戰士，裝備；');
    this.weapon?.display();
    this.clothes?.display();
  }
}

// * 冒險者訓練營
interface TrainingCamp {
  trainAdventurer(): Adventurer;
}

// * 實體工廠 弓箭手訓練營
class ArcherTrainingCamp implements TrainingCamp {
  private static factory: AbstractFactory.EquipFactory = new AbstractFactory.ArcherEquipFactory();

  trainAdventurer(): Adventurer {
    console.log('訓練一個弓箭手');
    const adventurer: Adventurer = new Archer();
    // 訓練完成配發裝備
    adventurer.setWeapon(ArcherTrainingCamp.factory.productWeapon());
    adventurer.setClothes(ArcherTrainingCamp.factory.productClothes());
    return adventurer;
  }
}

// * 實體工廠 戰士訓練營
class WarriorTrainingCamp implements TrainingCamp {
  private static factory: AbstractFactory.EquipFactory = new AbstractFactory.WarriorEquipFactory();

  trainAdventurer(): Adventurer {
    console.log('訓練一個戰士');
    const adventurer: Adventurer = new Warrior();
    // 訓練完成配發裝備
    adventurer.setWeapon(WarriorTrainingCamp.factory.productWeapon());
    adventurer.setClothes(WarriorTrainingCamp.factory.productClothes());
    return adventurer;
  }
}

export default abstractFactoryTest;
