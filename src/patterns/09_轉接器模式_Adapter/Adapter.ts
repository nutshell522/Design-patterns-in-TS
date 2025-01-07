/**
 * * Command 命令模式
 */

/**
 * * 弓箭手介面 Adaptee
 */
export interface Archer {
  shoot(): void; // 射箭
}

// * 弓箭手 (Concrete Adapter)
export class BowArcher implements Archer {
  public shoot() {
    console.log('射箭');
  }
}

/**
 * * 法師介面 Target
 */
export interface Wizard {
  fireBall(): void; // 火球
}

/**
 * * 轉接器 (Adapter)
 */
export class Adapter implements Wizard {
  private archer: Archer;

  constructor(archer: Archer) {
    this.archer = archer;
  }

  public fireBall() {
    console.log('在弓箭上包一層布 -> 淋上花生油 -> 點火');
    this.archer.shoot();
    console.log('火球發射');
  }
}
