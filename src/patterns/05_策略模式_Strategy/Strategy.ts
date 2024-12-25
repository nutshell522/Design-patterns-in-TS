/**
 * * Strategy 策略模式
 */

// * 戰鬥策略介面
interface FightStrategy {
  // 執行策略
  excute: () => void;
}

/**
 * * 一般攻擊 (Concrete Strategy)
 */
export class NormalAttack implements FightStrategy {
  public excute(): void {
    console.log('使用普通攻擊');
  }
}

/**
 * * 技能攻擊 (Concrete Strategy)
 */
export class SkillAttack implements FightStrategy {
  public excute(): void {
    console.log('使用很痛的技能攻擊');
  }
}

/**
 * * 使用道具 (Concrete Strategy)
 */
export class UseItem implements FightStrategy {
  public excute(): void {
    console.log('使用道具，丟出火把');
  }
}

/**
 * * 冒險者 (Context)
 */
export class Adventurer {
  private fightStrategy?: FightStrategy;

  // 選擇攻擊策略
  public choiceStrategy(fightStrategy: FightStrategy): void {
    this.fightStrategy = fightStrategy;
  }

  // 進行攻擊
  public attack(): void {
    if (!this.fightStrategy) {
      console.log('請選擇戰鬥策略');
      return;
    }
    this.fightStrategy.excute();
  }
}
