const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

$.getJSON("js/json/news-data.json", function(data) {
    const article = data.find(n => n.id === id);
  
    if (article) {
      $(".news-title").text(article.title);
      $("#img")
        .attr("src", article.img)
        .attr("alt", article.alt);
      $("#category").text(article.category);
      $("#date").text(article.date);

      article.text.forEach(paragraph => {
        $("#text").append(`<p>${paragraph}</p>`);
      });
    } else {
      $("#text").text("Artigo não encontrado.");
    }
  });