(function(){const THEME_COOKIE_NAME='tane-dev-theme';function setCookie(cookieName,cookieValue,numberOfDays=180){const d=new Date();d.setTime(d.getTime()+(numberOfDays*24*60*60*1000));document.cookie=`${cookieName}=${cookieValue};expires=${d.toUTCString()};path=/`;}
function getCookie(cookieName){const name=`${cookieName}=`;const decodedCookie=decodeURIComponent(document.cookie);const ca=decodedCookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return '';}
const buttonLight=document.querySelector('.btn-light');const buttonDark=document.querySelector('.btn-dark');const bodyElement=document.body;buttonLight.addEventListener('click',()=>{document.documentElement.className='light';bodyElement.className='light'
buttonDark.classList.remove('selected')
buttonLight.classList.add('selected')
setCookie(THEME_COOKIE_NAME,'light');});buttonDark.addEventListener('click',()=>{document.documentElement.className='dark';bodyElement.className='dark'
buttonLight.classList.remove('selected')
buttonDark.classList.add('selected')
setCookie(THEME_COOKIE_NAME,'dark');});let cookieVal=getCookie(THEME_COOKIE_NAME);if(cookieVal){document.documentElement.className=cookieVal;bodyElement.classList=cookieVal
if(cookieVal==='light'){buttonLight.classList.add('selected');}else if(cookieVal==='dark'){buttonDark.classList.add('selected')}}})();