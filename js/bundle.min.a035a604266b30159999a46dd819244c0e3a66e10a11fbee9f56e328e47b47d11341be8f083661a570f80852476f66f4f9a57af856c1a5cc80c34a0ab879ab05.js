(function(){const THEME_COOKIE_NAME='tane-dev-theme';function setCookie(cookieName,cookieValue,numberOfDays=180){const d=new Date();d.setTime(d.getTime()+(numberOfDays*24*60*60*1000));document.cookie=`${cookieName}=${cookieValue};expires=${d.toUTCString()};path=/`;}
function getCookie(cookieName){const name=`${cookieName}=`;const decodedCookie=decodeURIComponent(document.cookie);const ca=decodedCookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return '';}
const buttonTheme=document.querySelectorAll('.btn-theme');const bodyElement=document.body;buttonTheme.forEach(button=>{button.addEventListener('click',(event)=>{const theme=event.target.dataset.theme
console.dir(event.target);document.documentElement.className=theme;bodyElement.className=theme
buttonTheme.forEach(b=>b.classList.remove('selected'));button.classList.add('selected')
setCookie(THEME_COOKIE_NAME,theme);});});let cookieVal=getCookie(THEME_COOKIE_NAME);if(cookieVal){document.documentElement.className=cookieVal;bodyElement.classList=cookieVal
const el=document.querySelector('.btn-theme[data-theme='+cookieVal+']');if(el){el.classList.add('selected')}}})();