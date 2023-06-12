
const images = document.querySelectorAll('.index-content-item-pic');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    const backgroundImage = image.style.backgroundImage;
    document.body.style.backgroundImage = backgroundImage;
  });

  image.addEventListener('click', () => {
    const backgroundImage = image.style.backgroundImage;
    document.body.style.backgroundImage = backgroundImage;
  });
});



function selectItem(index) {
  const sidebarItems = document.querySelectorAll('.sidebar li');
  const contentItems = document.querySelectorAll('.content .item');

  // 清除其他项目的选中状态和内容显示
  sidebarItems.forEach(item => {
    item.classList.remove('active');
  });
  contentItems.forEach(item => {
    item.classList.remove('active');
  });

  // 添加选中状态到当前项目，并显示对应内容
  sidebarItems[index - 1].classList.add('active');
  contentItems[index - 1].classList.add('active');
}








