

let video = document.getElementById('video')

async function playVideo(){
    try{
        await  video.play();
       
    } catch(err){
        document.body.innerHTML = '<h1>Does not work</h1>'
    }
}

async function pauseVideo(){
    try{
        await  video.pause();  
    } catch(err){
        document.body.innerHTML = '<h1>Does not work</h1>'
    }
}

$('#play').click(function(){
    $('#play').css('display', 'none');
    $('#pouse').css('backgroundColor', 'orange');
    $('#pouse').css('display', 'block');
})

$('#pouse').click(function(){
    $('#pouse').css('display', 'none');
    $('#play').css('display', 'block');
    $('#play').css('backgroundColor', 'blue');
})







