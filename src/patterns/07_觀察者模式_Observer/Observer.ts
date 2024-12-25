/**
 * * Observer 觀察者模式
 */

/**
 * * 被觀察者介面 (Subject)
 */
export abstract class Subject {
  protected _list: Adventurer[] = [];

  // 觀察者想被通知
  public add(adventurer: Adventurer) {
    this._list.push(adventurer);
  }

  // 觀察者不想接到通知
  public remove(adventurer: Adventurer) {
    this._list = this._list.filter((ad) => ad != adventurer);
  }

  // 貼出任務公告
  public abstract sendQuestions(questions: string): void;
}

// * 冒險者協會
export class Association extends Subject {
  public sendQuestions(questions: string): void {
    // 向訂閱者逐一發送通知
    this._list.forEach((adventurer) => {
      adventurer.getQuestions(questions);
    });
  }
}

/**
 * * 冒險者 (Observer)
 */
export abstract class Adventurer {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // 冒險者接受任務
  public abstract getQuestions(questions: string): void;
}

// * 槍兵 (Concrete Observer) - 繼承冒險者
export class Lancer extends Adventurer {
  constructor(name: string) {
    super(name);
  }

  public getQuestions(questions: string): void {
    console.log(`${this._name}：單來就改，任務來就接，沒在怕的。`);
  }
}

// * 吟遊詩人 (Concrete Observer) - 繼承冒險者
export class Bard extends Adventurer {
  constructor(name: string) {
    super(name);
  }

  public getQuestions(questions: string): void {
    if (questions.length > 10) {
      console.log(`${this._name}：任務太難了，我只會唱歌跳舞，不接不接。`);
    } else {
      console.log(`${this._name}：當街頭藝人太難賺了，偶爾也是要解任務賺點錢的。`);
    }
  }
}

// * 槍手 (Concrete Observer) - 繼承冒險者
export class Gunman extends Adventurer {
  constructor(name: string) {
    super(name);
  }

  public getQuestions(questions: string): void {
    if (questions.length < 10) {
      console.log(`${this._name}：任務太簡單了，我不想理他。`);
    } else {
      console.log(`${this._name}：只要我的手上有槍，誰都殺不死我，出發執行任務賺獎金啦！`);
    }
  }
}
