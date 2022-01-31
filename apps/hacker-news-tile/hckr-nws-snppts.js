(async function() {
    try{
      var res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      posts=await res.json();
      var top={};
      var url;
      for(e=0;e<5;e++){
        url='https://hacker-news.firebaseio.com/v0/item/'+posts[e]+'.json';
        post = await fetch(url);
        post = await post.json();
        top[Object.keys(top).length]=post;
      }
      for(p in top){
        document.getElementById("news"+p).textContent = top[p]["title"];
        if(top[p]["url"]!=undefined){
        document.getElementById("news"+p).setAttribute("href",top[p]["url"]);
        }
        document.getElementById("news"+p).setAttribute("target", "_blank");
        document.getElementById("news"+p).setAttribute("class", "s");
      }
    } catch (e){console.warn("Error in hacker news module: ", e)};
})();