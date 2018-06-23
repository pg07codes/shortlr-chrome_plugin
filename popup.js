/*created by Pranav Gupta (pg07codes) on 23-06-2018 */

let $LongURL = $('#url')
let $secret=$('#secret')
let $code=$('#code')
let $shortCode=$('#shortcode')

$('#submit').click(function (){
    $.post('https://cb.lk/api/v1/shorten', {
        url: $LongURL.val(),
        crossDomain:true,
        secret: $secret.val(),
        code: $code.val()
    }, function (data) {
       console.log(data)
        // if (typeof data === 'string') {
        //     $shortCode.html(data)
        // }
        // else{
        //     $shortCode.html(`<p>some invalidation ahs occured</p>`)
        // }
    })
})
