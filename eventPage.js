/*created by Pranav Gupta (pg07codes) on 29-06-2018 */

let jquery=document.createElement('script')
jquery.setAttribute('src','jquery.min.js')
document.head.appendChild(jquery)


function validateURL(str) {
    let URLregex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
    if(URLregex.test(str))
    {
        console.log("Valid URL")
        return true
    }
    else
        console.log("Invalid URL")
}

let contextItems={
    id:"shortenURL",
    title:"shorten this URL and copy",
    contexts:["selection"]
}

chrome.contextMenus.create(contextItems)


chrome.contextMenus.onClicked.addListener((data)=>{
    if(data.menuItemId==="shortenURL" && data.selectionText){
        console.log("clicked on Shortlr ContextMenuItem")
        if(validateURL(data.selectionText))
         {
             console.log("requesting short url")
             $.post('https://cb.lk/api/v1/shorten', {
                 url: data.selectionText,
                 crossDomain:true,
                 secret:'cb@111',//hard coded the secret here because no login is available right now
                 code: ''   // no way to pass custom secret here, so it is empty by default
             }, function (data) {
                 console.log("short url arrived")
                 // document.execCommand('copy')
                 alert("Short link copied to clipboard!")
             })
         }

    }
})