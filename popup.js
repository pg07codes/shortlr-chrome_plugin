/*created by Pranav Gupta (pg07codes) on 23-06-2018 */

let $LongURL = $('#url')
let $secret=$('#secret')
let $code=$('#code')
let $shortCode=$('#shortCode')


$('#submit').click(function (){
    if ($LongURL.val().length === 0){
        $shortCode.empty()
        $shortCode.append(`URL field empty`)
    }
    else if ($secret.val().length === 0){
        $shortCode.empty()
        $shortCode.append(`SECRET field empty`)
    }
    else{
        $.post('https://cb.lk/api/v1/shorten', {
        url: $LongURL.val(),
        crossDomain:true,
        secret: $secret.val(),
        code: $code.val()
    }, function (data) {
            if(data==="No more making links without secret"){
                $shortCode.empty()
                $shortCode.append(`SECRET not valid`)
            }
            else{
                $shortCode.empty()
                $shortCode.append(`
            <input style="color:white;" class="form-control form-control-sm input bg-dark col-8" value="https://cb.lk/${data.shortcode}" id="shortURL" type="url">
            <div class="alert alert-danger notif" role="alert">Copied!</div>`)
            }
            $("#shortURL").select()
            document.execCommand('copy')
        })
    }

})
