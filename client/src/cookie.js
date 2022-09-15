export function setCookie(cName,cValue,cDay){
    var d = new Date();
    d.setDate(d.getDate()+cDay)
    window.document.cookie = `${cName}=${cValue};expires=${d}`;
}

export function removeCookie(cName){
    var d = new Date();
    d.setDate(d.getDate()-1)
    window.document.cookie = `${cName}=;expires=${d}`;
}

//[{},{},{}]
export function getCookies(){
    let cookies = window.document.cookie;
    let x = cookies.split(';')
    let cookieArr = x.map((el)=>{
        let y = el.split('=')
        let key = y[0].trim();
        let value = y[1];
        return {[key]:value}
    })
    return cookieArr;
}

export function getCookie(cname){
    let cookieArr = getCookies()
    let cookie = cookieArr.find((el)=>{
        return Object.keys(el)[0] ==cname
    })
    return cookie?.[cname];
}
