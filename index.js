let video = document.getElementById('video')
let checker = 0;
let videoPlayPaouse = 0;




//ვიდეოზე დაკლიკებისას რომ იწყებდეს
video.onclick = function () {
    document.querySelector('[divi]').classList.remove('myPlay')
    videoPlayPaouse++;
    if(videoPlayPaouse == 1){
        try {
            video.play();
            timeCheck();
            $('#play').html('<i class="fas fa-pause"></i>');
            $('#play').attr('onclick', 'pauseVideo()');
            $('#time').text(`0:${Math.floor(video.currentTime)}`)
        } catch (err) {
            document.body.innerHTML = '<h1>Does not work</h1>'
        }
    } else if(videoPlayPaouse == 2) {
        
            try {  
                document.querySelector('[divi]').classList.add('myPlay')
                video.pause();
                clearInterval()
                $('#play').html('<i class="fas fa-play"></i>')
                $('#play').attr('onclick', 'playVideo()')
                videoPlayPaouse = 0;
    
            } catch (err) {
                document.body.innerHTML = '<h1>Does not work</h1>'
            }
        
    }
        
  

    console.log(videoPlayPaouse, 'videoPlayPaouse')

}

//მცირე სტილები და დამატებები
$('document').ready(function () {
    $('#range').css({
        'width': video.innerWidth
    })

    $('#fullScreen').on('mouseenter', function () {
        $('#fullScreen').html('<i class="fas fa-compress"></i>')
    })
    $('#fullScreen').on('mouseleave', function () {
        $('#fullScreen').html('<i class="fas fa-compress-arrows-alt"></i>')
    })
})

//დაწყება
async function playVideo() {
    try {
        document.querySelector('[divi]').classList.remove('myPlay')
        checker = 0;
        await video.play();
        await timeCheck();
        $('#play').html('<i class="fas fa-pause"></i>');
        $('#play').attr('onclick', 'pauseVideo()');
        $('#time').text(`0:${Math.floor(video.currentTime)}`)
    } catch (err) {
        document.body.innerHTML = '<h1>Does not work</h1>'
    }
}
//დაპაუზება
async function pauseVideo() {
    try {
        document.querySelector('[divi]').classList.add('myPlay')
        checker = 5;
        await video.pause();
        clearInterval()
        $('#play').html('<i class="fas fa-play"></i>')
        $('#play').attr('onclick', 'playVideo()')

    } catch (err) {
        document.body.innerHTML = '<h1>Does not work</h1>'
    }
}
//პაუზა ღილაკად გადაკეთება მაუსით გადაადგილებისას
function change() {
    $('#play').html('<i class="fas fa-pause"></i>');
    $('#play').attr('onclick', 'pauseVideo()');
}
let current;
//დროის მიხედვით ითვლის
let timeCheck = function () {
    setInterval(() => {
        if (checker != 5) {
            if (video.currentTime < 60) {
                $('#time').text(`0:${Math.floor(video.currentTime)}`)
            } else if (video.currentTime >= 60) {
                $('#time').text(`${Math.floor(video.currentTime / 60)}:${((video.currentTime / 60) % (Math.floor(video.currentTime / 60))).toString()[2]}${((video.currentTime / 60) % (Math.floor(video.currentTime / 60))).toString()[3]}`)
            }

            $('#range').val(video.currentTime);
            console.log(video.currentTime)
            document.getElementById('range').setAttribute('max', video.duration)
            if (video.ended) {
                video.play()
            }
        }
    }, 1000);
}

//მაუსის მოკიდებით უცვლის დროს
$('#range').on('input', function () {
    document.querySelector('[divi]').classList.remove('myPlay')
    videoPlayPaouse = 1;
    if (video.currentTime < 60) {
        $('#time').text(`0:${Math.floor(video.currentTime)}`)
    } else if (video.currentTime >= 60) {
        $('#time').text(`${Math.floor(video.currentTime / 60)}:${((video.currentTime / 60) % (Math.floor(video.currentTime / 60))).toString()[2]}${((video.currentTime / 60) % (Math.floor(video.currentTime / 60))).toString()[3]}`)
    }

    checker = 0;
    timeCheck()
    document.getElementById('range').setAttribute('max', video.duration)
    console.log($('#range').val(), 'range value')
    console.log(video.currentTime, 'current time')

    video.currentTime = $('#range').val();
    video.play();
    change();
    if (video.ended) {
        video.play()
    }
})

//ხმის დარეგულირება
$('#volume').on('input', function () {
    $('#volumeNum').text($('#volume').val())
    video.volume = $('#volume').val();

})

//მთლიან ეკრანზე გაზრდა
function fullScreen() {
    video.webkitRequestFullScreen();
}




