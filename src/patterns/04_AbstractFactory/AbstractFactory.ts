/**
 * * Abstract Factory 抽象工廠模式
 */

/**
 * * 裝備工廠
 */
// * 上衣介面 (Abstract Product)
export abstract class Clothes {
  protected abstract simpleName: string; // 名稱
  protected abstract def: number; // 防禦力

  public getDef(): number {
    return this.def;
  }

  public setDef(def: number): void {
    this.def = def;
  }

  public display: () => void = () => {
    console.log(`${this.simpleName} 防禦力: ${this.def}`);
  };
}

// * 盔甲 (Concrete Product) - 鬥士上衣
export class Armor extends Clothes {
  protected simpleName: string = '盔甲';
  protected def: number = 10;
}

// * 皮甲 (Concrete Product) - 弓箭手上衣
export class Leather extends Clothes {
  protected simpleName: string = '皮甲';
  protected def: number = 5;
}

/**
 * * 武器工廠
 */
// * 武器介面 (Abstract Product)
export abstract class Weapon {
  protected abstract simpleName: string; // 名稱
  protected abstract atk: number; // 攻擊力
  protected abstract range: number; // 攻擊範圍

  public getAtk(): number {
    return this.atk;
  }

  public setAtk(atk: number): void {
    this.atk = atk;
  }

  public getRange(): number {
    return this.range;
  }

  public setRange(range: number): void {
    this.range = range;
  }

  public display: () => void = () => {
    console.log(`${this.simpleName} 攻擊力: ${this.atk} 攻擊範圍: ${this.range}`);
  };
}

// * 長劍 (Concrete Product) - 鬥士武器
export class LongSword extends Weapon {
  protected simpleName: string = '長劍';
  protected atk: number = 15;
  protected range: number = 1;
}

// * 弓箭 (Concrete Product) - 弓箭手武器
export class Bow extends Weapon {
  protected simpleName: string = '弓箭';
  protected atk: number = 10;
  protected range: number = 5;
}

/**
 * * 裝備工廠介面 (Abstract Factory)
 */
// * 裝備工廠介面 - 定義每一間工廠應該要生產的產品
export interface EquipFactory {
  productWeapon(): Weapon;
  productClothes(): Clothes;
}

// * 鬥士裝備工廠 (Concrete Factory)
export class WarriorEquipFactory implements EquipFactory {
  productWeapon(): Weapon {
    const weapon: Weapon = new LongSword();
    weapon.setAtk(15);
    weapon.setRange(1);
    return weapon;
  }

  productClothes(): Clothes {
    const clothes: Clothes = new Armor();
    clothes.setDef(10);
    return clothes;
  }
}

// * 弓箭手裝備工廠 (Concrete Factory)
export class ArcherEquipFactory implements EquipFactory {
  productWeapon(): Weapon {
    const weapon: Weapon = new Bow();
    weapon.setAtk(10);
    weapon.setRange(5);
    return weapon;
  }

  productClothes(): Clothes {
    const clothes: Clothes = new Leather();
    clothes.setDef(5);
    return clothes;
  }
}
