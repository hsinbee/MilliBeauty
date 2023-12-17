const images = document.querySelectorAll('.index-content-item-pic');
const copyButton = document.getElementById('copyButton');
const copyText = document.getElementById('copyText');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    const backgroundImage = image.style.backgroundImage;
    setBodyBackgroundImage(backgroundImage);
  });

  image.addEventListener('click', () => {
    const backgroundImage = image.style.backgroundImage;
    setBodyBackgroundImage(backgroundImage);
  });
});

function setBodyBackgroundImage(backgroundImage) {
  document.body.style.backgroundImage = backgroundImage;
  document.body.style.backgroundSize = '100%';  // 使用 'contain' 保持圖片比例並填滿視窗
  document.body.style.backgroundRepeat = 'repeat';  // 圖片重複
}

// 檢查視窗寬度
function isDesktop() {
  return window.innerWidth >= 768;
}

// 添加事件監聽器
if (isDesktop()) {
  copyButton.addEventListener('click', () => {
    copyText.select();
    document.execCommand('copy');
  });
}

