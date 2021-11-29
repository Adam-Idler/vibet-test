function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

  const viberButton = document.querySelector('.viber-button');

  console.log(iOS());

  if (iOS()) {
    viberButton.setAttribute('href', 'viber://add?number=79505713018')
  } else {
    viberButton.setAttribute('href', 'viber://chat?number=79505713018')
  }