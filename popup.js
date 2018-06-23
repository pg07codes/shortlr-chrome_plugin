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
        $("#shortcode").append(`
        <input class="form-control form-control-sm input col-6" value="https://cb.lk/${data.shortcode}" type="url">
        <button class="btn btn-sm btn-light col-2" id="copy">COPY</button>
        `)

    })
})
