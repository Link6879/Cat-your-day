'use strict';
(function () {
    console.log("Script cargado");

    var videos = [
        { url:"https://www.youtube.com/watch?v=J---aiyznGQ", video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/J---aiyznGQ' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>" },
        { url: "https://www.youtube.com/watch?v=rvramBC_P_U", video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/rvramBC_P_U' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>" },
        { url: "https://www.youtube.com/watch?v=558fJFk1BL8", video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/558fJFk1BL8' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowfullscreen></iframe>" },
        { url: "https://www.youtube.com/watch?time_continue=2&v=xHtVEH_JJoE", video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/xHtVEH_JJoE' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>" },
        { url: "https://www.youtube.com/watch?v=UqYWB_Ljqbo", video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/UqYWB_Ljqbo' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>" },
        { url: "https://www.facebook.com/watch/?v=804223869950984", video: "<iframe src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresudepresion%2Fvideos%2F804223869950984%2F&show_text=0&width=560' width='560' height='313' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe>"},
        { url: "https://www.facebook.com/watch/?v=428261987974011", video: "<iframe src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresudepresion%2Fvideos%2F428261987974011%2F&show_text=0&width=476' width='476' height='476' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe>"},
        { url: "https://www.facebook.com/watch/?v=798172083902651", video: "<iframe src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresudepresion%2Fvideos%2F798172083902651%2F&show_text=0&width=271' width='271' height='476' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe>"},
        { url: "https://www.facebook.com/watch/?v=2296358647358581", video: "<iframe src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresudepresion%2Fvideos%2F2296358647358581%2F&show_text=0&width=380' width='380' height='476' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe>"},
        { url: "https://www.facebook.com/watch/?v=2252271128434309", video: "<iframe src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresudepresion%2Fvideos%2F2252271128434309%2F&show_text=0&width=261' width='261' height='476' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe>"},
        { url: "https://www.facebook.com/watch/?v=327561698116454", video: "<iframe src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcuresudepresion%2Fvideos%2F327561698116454%2F&show_text=0&width=380' width='380' height='476' style='border: none; overflow: hidden' scrolling='no' frameborder='0' allowTransparency='true' allowFullScreen='true'></iframe>"},

    ]

    var number1 = Math.floor(Math.random() * videos.length);

    var frame = document.getElementById("video");

    frame.innerHTML = videos[number1].video;
    
    videos.splice(number1, 1);

    function share(url){
        document.getElementById("cat").href= url;
        
    }

    function obtenerVideo(){

        var number2 = Math.floor(Math.random() * videos.length);

        frame.innerHTML = videos[number2].video;

        share(videos[number2].url);

        videos.splice(number2, 1);

    }

    document.getElementById("mor").addEventListener("click", obtenerVideo);

    
    share(videos[number1].url)
 
})()