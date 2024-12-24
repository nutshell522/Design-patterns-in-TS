import * as Factory from '../03_Factory/Factory';
import * as AbstractFactory from './AbstractFactory';
/**
 * * 抽象工廠模式測試
 */
const abstractFactoryTest = () => {};

// 冒險者
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

// 冒險者訓練營
interface TrainingCamp {
  trainAdventurer(): Adventurer;
}

// 弓箭手訓練營
class ArcherTrainingCamp implements TrainingCamp {
  private static EquipFactory: AbstractFactory.EquipFactory = new AbstractFactory.ArcherEquipFactory();

  trainAdventurer(): Adventurer {
    const adventurer: Adventurer = new Archer();
  }
}

export default abstractFactoryTest;
