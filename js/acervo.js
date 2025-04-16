    function playVideo() {
        let video = document.getElementById("video");
        let overlay = document.querySelector(".video-overlay");

        overlay.style.display = "none"; 
        video.style.display = "block"; 
        video.play(); 
    }


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
    
$.getJSON("js/json/acervo.json", function(data) {
    const obra = data.find(n => n.id === id);
      
    if (obra) {
        $(".title").text(obra.title);
        $("#img")
            .attr("src", obra.img)
            .attr("alt", obra.alt);
            $("#video")
            .attr("src", obra.video)        
        $("#year").text(obra.year);
        $("#director").text(obra.director);
        $(".style").text(obra.style);
        $(".time").text(obra.time);
        $(".frame").text(obra.frame);
        $(".format").text(obra.format);
        $(".color").text(obra.color);
        $(".sound").text(obra.sound);
        $("#idnumber").text(obra.idnumber);
        $("#text").text(obra.text);
        }
      });