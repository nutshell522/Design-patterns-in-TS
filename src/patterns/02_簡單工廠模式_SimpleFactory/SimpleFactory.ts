/**
 * * Simple Factory 簡單工廠模式
 */
// * 冒險者訓練營
class TrainingCamp {
  // * 訓練冒險者
  public trainAdventurer(type: AdventurerType): Adventurer {
    switch (type) {
      case 'archer':
        console.log('訓練一個弓箭手');
        return new Archer();
      case 'warrior':
        console.log('訓練一個戰士');
        return new Warrior();
      default:
        throw new Error('找不到冒險者類型');
    }
  }
}

// * 冒險者
interface Adventurer {
  getType(): string;
}

// * 冒險者類型
type AdventurerType = 'archer' | 'warrior';

// * 弓箭手
class Archer implements Adventurer {
  getType(): string {
    return '弓箭手';
  }
}

// * 戰士
class Warrior implements Adventurer {
  getType(): string {
    return '戰士';
  }
}

export default TrainingCamp;
