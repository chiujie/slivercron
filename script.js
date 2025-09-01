// 第一次點擊才播放影片聲音（避免瀏覽器自動播放限制）
document.addEventListener('click', function playOnce() {
  const bgVideo = document.querySelector('.bg-video');
  if (bgVideo) {
    bgVideo.muted = false; // 確保有聲音
    bgVideo.play();
  }
  document.removeEventListener('click', playOnce);
});

console.log("網站已載入");

