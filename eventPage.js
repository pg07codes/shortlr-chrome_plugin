/*created by Pranav Gupta (pg07codes) on 29-06-2018 */

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
            console.log("short url here")
    }
})