/**
 * * Decorator 裝飾者模式
 */

/**
 * * 冒險者介面 (Component) - 規範冒險者應該有的功能
 */
export interface Adventurer {
  // 攻擊
  attack: () => void;
}

// * 長槍兵 (Concrete Component)
export class Lancer implements Adventurer {
  // 冒險者姓名
  private _name: string;

  // 冒險者建立需有姓名
  constructor(name: string) {
    this._name = name;
  }

  // 攻擊
  public attack() {
    console.log(`長槍攻擊 by ${this._name}`);
  }
}

/**
 * * 稱號介面 (Decorator)
 */
export abstract class Title implements Adventurer {
  // 被裝飾的冒險者
  protected _adventurer: Adventurer;

  constructor(adventurer: Adventurer) {
    this._adventurer = adventurer;
  }

  public attack() {
    this._adventurer.attack();
  }
}

// * 稱號 - 強壯
export class TitleStrong extends Title {
  constructor(adventurer: Adventurer) {
    super(adventurer);
  }

  // 稱號讓攻擊力增加
  public attack() {
    console.log('猛力!');
    super.attack();
  }
}

// * 稱號 - 敏捷
export class TitleAgile extends Title {
  constructor(adventurer: Adventurer) {
    super(adventurer);
  }

  // 稱號讓攻擊變快
  public attack() {
    console.log('快速!');
    super.attack();
  }

  // 取得稱號後獲得新的技能
  public useFlash() {
    console.log('使用瞬間移動');
  }
}

// * 稱號 - 燃燒
export class TitleFire extends Title {
  constructor(adventurer: Adventurer) {
    super(adventurer);
  }

  // 稱號讓攻擊增加燃燒
  public attack = () => {
    console.log('Burn baby burn!');
    super.attack();
  };

  // 取得稱號後獲得新的技能
  public fireball() {
    console.log('丟火球');
  }
}
