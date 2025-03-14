    function playVideo() {
        let video = document.getElementById("video");
        let overlay = document.querySelector(".video-overlay");

        overlay.style.display = "none"; 
        video.style.display = "block"; 
        video.play(); 
    }