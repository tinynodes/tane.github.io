const{Observable,fromEvent}=rxjs;const{tap,map}=rxjs.operators;const THEME_COOKIE_NAME='tane-dev-theme';function setCookie(cookieName,cookieValue,numberOfDays=180){const d=new Date();d.setTime(d.getTime()+(numberOfDays*24*60*60*1000));document.cookie=`${cookieName}=${cookieValue};expires=${d.toUTCString()};path=/`;}
function getCookie(cookieName){const name=`${cookieName}=`;const decodedCookie=decodeURIComponent(document.cookie);const ca=decodedCookie.split(';');for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return '';}
function withUserPrefers(type,mode,signal){return new Observable(subscriber=>{if(!window.matchMedia){subscriber.error(new Error("No windows Media Match available"));}
function emitChange(event){subscriber.next(event.matches);}
const watcher=window.matchMedia(`(prefers-${type}: ${mode})`);if(signal){signal.onabort=()=>{watcher.removeEventListener("change",emitChange);!subscriber.closed&&subscriber.complete();};}
watcher.addEventListener("change",emitChange);subscriber.next(watcher.matches);return()=>{watcher.removeEventListener("change",emitChange);!subscriber.closed&&subscriber.complete();};});}
const buttonTheme=document.querySelectorAll('.btn-theme');const bodyElement=document.body;fromEvent(buttonTheme,'click').pipe(tap(event=>{bodyElement.className=event.target.dataset.theme;setCookie(THEME_COOKIE_NAME,event.target.dataset.theme)}),tap((event)=>{buttonTheme.forEach(b=>b.classList.remove('selected'));event.currentTarget.classList.add('selected')})).subscribe()
withUserPrefers('color-scheme','dark').pipe(map(value=>{if(getCookie(THEME_COOKIE_NAME)){return getCookie(THEME_COOKIE_NAME);}
return value?'dark':'light'}),tap((value)=>{bodyElement.className=value;})).subscribe()