/**
 * * Singleton 單例模式
 */
class Singleton {
  // * 一開始就建立物件，這樣只要一直回傳這個物件就是簡單的 singleton
  private static instance: Singleton;

  // * Private constructor，避免外部直接 new 這個 class
  private constructor() {
    // ? 這裡跑了很多初始化的程式碼，建立物件花費很多資源
  }

  // * constructor 是 private，需另外提供一個唯一方法呼叫這個實體物件
  public static getInstance(): Singleton {
    // ? 如果 instance 不存在，就建立一個新的 instance
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton;
