/**
 * * Facade 表象模式
 */

/**
 * * 電子產品介面，全部的電子產品都可以開關電源
 */
export abstract class Electronics {
  private _power: boolean = false; // 電源
  protected abstract _simpleName: string; // 電子產品名稱

  // 啟動電源
  public powerOn() {
    this._power = true;
  }

  // 關閉電源
  public powerOff() {
    this._power = false;
  }

  // 電源是否有開
  public isPowerOn() {
    return this._power;
  }

  // 顯示機器狀態
  protected showStatus() {
    console.log(`${this._simpleName} 電源 ${this._power ? '運作中' : '電源未開啟'}`);
  }
}

// * KTV 點歌機
export class KTVsystem extends Electronics {
  protected _simpleName: string = 'KTV點歌機';
  private _song: string = ''; // 歌曲

  // 選歌
  public selectSong(song: string) {
    this._song = song;
  }

  // 播放歌曲
  public playSong() {
    console.log(`${this._simpleName} 播放 ${this._song}`);
  }

  public showStatus() {
    super.showStatus();
    console.log(`${this._simpleName} 目前播放的歌曲: ${this._song}`);
  }
}

// * Play Station 3
export class PlayStation3 extends Electronics {
  protected _simpleName: string = 'PlayStation 3';
  private _cd: string = ''; // 目前播放的 CD

  // 放入 CD 片
  public insertCD(cd: string) {
    this._cd = cd;
  }

  public getCD() {
    return this._cd;
  }

  // 播放 CD
  public play() {
    console.log(`${this._simpleName} 開始播放 ${this._cd}`);
  }

  public showStatus() {
    super.showStatus();
    console.log(`${this._simpleName} 目前播放的 CD: ${this._cd}`);
  }
}

// * 環繞音響
export class Stereo extends Electronics {
  protected _simpleName: string = '環繞音響';
  private _sound: number = 50; // 音量

  // 調整音量
  public setSound(sound: number) {
    this._sound = sound;
  }

  public getSound() {
    return this._sound;
  }

  public showStatus() {
    super.showStatus();
    console.log(`${this._simpleName} 音量: ${this._sound}`);
  }
}

type Source = 'HDMI' | 'PlayStation 3' | 'KTV點歌機';

// * 液晶電視
export class Television extends Electronics {
  protected _simpleName: string = '液晶電視';
  private _channel: number = 0; // 頻道
  private _sound: number = 50; // 音量
  private _source: Source = 'HDMI'; // 輸入來源

  // 選擇訊號源
  public switchSource(source: Source) {
    this._source = source;
  }

  // 調整音量
  public setSound(sound: number) {
    this._sound = sound;
  }

  // 選電視頻道
  public selectChannel(channel: number) {
    this._channel = channel;
  }

  // 看目前觀看電視頻道
  public showTV() {
    console.log(`目前觀看的頻道： ${this._channel}`);
  }

  public showStatus() {
    super.showStatus();
    if (this.isPowerOn()) {
      console.log(`${this._simpleName} 音量: ${this._sound}`);
      if (this._source == 'HDMI') {
        console.log(`${this._simpleName} 頻道: ${this._channel}`);
      } else if (this._source == 'PlayStation 3') {
        console.log(`${this._simpleName} 輸入來源: ${this._source}`);
      } else if (this._source == 'KTV點歌機') {
        console.log(`${this._simpleName} 輸入來源: ${this._source}`);
      }
    }
  }

  public getSound() {
    return this._sound;
  }

  public getChannel() {
    return this._channel;
  }

  public getSource() {
    return this._source;
  }
}

/**
 * * 管理影音設備的外觀類別 (Facade)
 */
export class VideoRoomFacade {
  private _ktv: KTVsystem = new KTVsystem();
  private _ps3: PlayStation3 = new PlayStation3();
  private _stereo: Stereo = new Stereo();
  private _tv: Television = new Television();

  // 準備用ps3看電影
  public readyPlayMovie(cd: string) {
    this._stereo.powerOn(); // 音響要先開
    this._tv.powerOn(); // 接著開電視
    this.setSound(50); // 設定音量
    this._tv.switchSource('PlayStation 3'); // 切換輸入源
    this._ps3.powerOn(); // 開啟 PS3
    this._ps3.insertCD(cd); // 放入電影碟片
  }

  // 用ps3放電影
  public playMovie() {
    if (this._ps3.isPowerOn()) {
      this._ps3.play();
    }
  }

  // 看目前觀看的電視頻道
  public showTV() {
    this._tv.showTV();
  }

  // 關閉所有設備
  public turnOffAll() {
    this._stereo.powerOff(); // 音響要先關
    this._ktv.powerOff(); // KTV 有開的話第二個關
    this._ps3.powerOff(); // PS3 有開的話第三個關
    this._tv.powerOff(); // 電視最後關
  }

  // 看電視
  public watchTV() {
    this._tv.powerOn(); // 開電視
    this._tv.switchSource('HDMI'); // 切換輸入源
  }

  // 選電視頻道
  public selectChannel(channel: number) {
    this._tv.selectChannel(channel);
  }

  // 準備唱KTV
  public readyKTV() {
    this._stereo.powerOn(); // 音響要先開
    this._ktv.powerOn(); // 開 KTV
    this._tv.powerOn(); // 接著開電視
    this.setSound(50); // 設定音量
    this._tv.switchSource('KTV點歌機'); // 切換輸入源
  }

  // ktv 點歌
  public selectSong(song: string) {
    if (this._ktv.isPowerOn()) {
      this._ktv.selectSong(song);
    }
  }

  // 播放 KTV 歌曲
  public playSong() {
    if (this._ktv.isPowerOn()) {
      this._ktv.playSong();
    }
  }

  // 調整音量
  public setSound(sound: number) {
    if (this._stereo.isPowerOn()) {
      this._stereo.setSound(sound);
    }
    if (this._tv.isPowerOn()) {
      this._tv.setSound(sound);
    }
  }

  // 顯示所有設備狀態
  public showAllStatus() {
    this._stereo.showStatus();
    this._tv.showStatus();
    this._ktv.showStatus();
    this._ps3.showStatus();
  }
}
