/**
 * * Command 命令模式
 */

/**
 * * 廚房人員 (Receiver)
 */
export interface KitchenWorker {
  // * 完成訂單
  finshOrder(): void;
}

// * 搖飲料小弟 (Concrete Receiver)
export class Barkeep implements KitchenWorker {
  public finshOrder() {
    console.log('拿出杯子->加滿冰塊->把飲料倒進杯子->飲料完成');
    console.log();
  }
}

// * 點心廚師 (Concrete Receiver)
export class Cheff implements KitchenWorker {
  public finshOrder() {
    console.log('取出麵包->美乃滋塗上滿滿的麵包->丟進烤箱->撒上可以吃的裝飾->點心完成');
    console.log();
  }
}

/**
 * * 飲料訂單 (Concrete Command)
 */
export abstract class Order {
  // 廚房工作者 (receiver)
  protected _receiver: KitchenWorker;
  protected _name?: string;

  constructor(receiver: KitchenWorker) {
    this._receiver = receiver;
  }

  // 將訂單送給廚房人員
  public sendOrder() {
    this._receiver.finshOrder();
  }

  // 讓其他程式知道這是什麼訂單
  public getName() {
    return this._name;
  }
}

// * 飲料訂單 (Concrete Command)
export class DrinkOrder extends Order {
  constructor(receiver: KitchenWorker) {
    super(receiver);
    this._name = 'drinkOrder';
  }
}

// * 點心訂單 (Concrete Command)
export class SnackOrder extends Order {
  constructor(receiver: KitchenWorker) {
    super(receiver);
    this._name = 'snackOrder';
  }
}

/**
 * * 服務生 (Invoker)
 */
export class Waitress {
  private _snackQty: number = 2; // 製作點心的原料
  private _drinkQty: number = 4; // 飲料剩餘的杯數
  private _orderList: Order[] = [];

  /**
   * 服務生接收訂單
   * @param order
   */
  public setOrder(order: Order) {
    if (order.getName() == 'snackOrder') {
      if (this._snackQty <= 0) {
        console.log('點心賣完了');
      } else {
        console.log('增加點心訂單');
        this._snackQty--;
        this._orderList.push(order);
      }
    }

    if (order.getName() == 'drinkOrder') {
      if (this._snackQty <= 0) {
        console.log('飲料賣完了');
      } else {
        console.log('增加飲料訂單');
        this._drinkQty--;
        this._orderList.push(order);
      }
    }
  }

  /**
   * 取消訂單
   * @param order
   */
  public cancelOrder(order: Order) {
    if (order.getName() == 'snackOrder') {
      console.log('取消一個點心');
      this._snackQty++;
    }

    if (order.getName() == 'drinkOrder') {
      console.log('取消一杯飲料');
      this._drinkQty++;
    }

    this._orderList = this._orderList.filter((o) => o != order);
  }

  /**
   * 將訂單送至廚房
   */
  public notifyBaker() {
    this._orderList.forEach((order) => {
      order.sendOrder();
    });
    this._orderList.length = 0;
  }
}
