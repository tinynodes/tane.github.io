(function () {

  const THEME_COOKIE_NAME = 'tane-dev-theme';

  function setCookie(cookieName, cookieValue, numberOfDays = 180) {
    const d = new Date();
    d.setTime(d.getTime() + (numberOfDays * 24 * 60 * 60 * 1000));
    document.cookie = `${cookieName}=${cookieValue};expires=${d.toUTCString()};path=/`;
  }

  function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (const i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  const buttonLight = document.querySelector('.btn-light');
  const buttonDark = document.querySelector('.btn-dark');

  const bodyElement = document.body;

  buttonLight.addEventListener('click', () => {
    bodyElement.className = 'light'
    setCookie(THEME_COOKIE_NAME, 'light');
  });

  buttonDark.addEventListener('click', () => {
    bodyElement.className = 'dark'
    setCookie(THEME_COOKIE_NAME, 'dark');
  });

  let cookieVal = getCookie(THEME_COOKIE_NAME);
  if (cookieVal) {
    bodyElement.classList = cookieVal
  }

})();
