/**
 * * Factory 工廠模式
 */
// * 冒險者
export interface Adventurer {
  getType(): string;
}

// * 弓箭手
export class Archer implements Adventurer {
  getType(): string {
    return '弓箭手';
  }
}

// * 戰士
export class Warrior implements Adventurer {
  getType(): string {
    return '戰士';
  }
}

// * 冒險者訓練營
export interface TrainingCamp {
  trainAdventurer(): Adventurer;
}

// * 弓箭手訓練營
export class ArcherTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    console.log('訓練一個弓箭手');
    return new Archer();
  }
}

// * 戰士訓練營
export class WarriorTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    console.log('訓練一個戰士');
    return new Warrior();
  }
}
