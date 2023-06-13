


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



  const copyButton = document.getElementById('copyButton');
  const copyText = document.getElementById('copyText');

  copyButton.addEventListener('click', () => {
    copyText.select();
    document.execCommand('copy');
    ;
  });
