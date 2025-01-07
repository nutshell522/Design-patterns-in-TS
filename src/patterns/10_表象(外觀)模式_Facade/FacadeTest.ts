import { VideoRoomFacade } from './Facade';

/**
 * * 外觀模式測試
 */
const FacadeTest = () => {
  console.log('--- 外觀模式測試 ---');
  const superRemote = new VideoRoomFacade();
  console.log('以下測試碼可以看出使用外觀模式後，操作步驟會比一個一個類別進去操作方便許多。');

  console.log('--- 看電影 ---');
  // 看電影
  superRemote.readyPlayMovie('魔戒');
  superRemote.playMovie();
  superRemote.showAllStatus();
  console.log('');
  // 關閉機器
  superRemote.turnOffAll();
  superRemote.showAllStatus();

  console.log('');
  console.log('--- 看電視 ---');
  // 看電視
  superRemote.watchTV();
  superRemote.selectChannel(20);
  superRemote.showTV();
  console.log('');
  // 關閉機器
  superRemote.turnOffAll();
  superRemote.showAllStatus();
  console.log('');

  console.log('--- 唱KTV ---');
  // 唱KTV
  superRemote.readyKTV();
  superRemote.selectSong('情非得已');
  superRemote.playSong();
  superRemote.showAllStatus();

  console.log('--- ---');
};

export default FacadeTest;
