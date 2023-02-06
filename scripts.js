function getNewsByCategory(){
    let category=id_category.value;
    console.log(category);
    
     fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=254444e446864ed387ba8eaedf57d835`).
     then(res=>res.json()).then(data=>headlinesCategory(data))
  
  }
  
  
  function headlinesCategory(data){
     let news=data.articles;
     let htmlData=``
     news.forEach(function(article){
     let title=article.title;
     let image=article.urlToImage;
     let description=article.description;
     let content=article.content;
     let url=article.url;
     let time=article.publishedAt;
         
     htmlData+=`
  
     <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
     <div class="row g-0">
       <div class="col-md-4">
         <img src="${image}" class="img-fluid rounded-start mt-2" alt="...">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">${title}</h5>
           <p class="card-text">${description}</
           <p class="card-text">${content}</p>
           <p class="card-text">${time}</p>
           <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
           <a href="${url}" class="btn btn-dark">Read more</a>
     
         </div>
       </div>
     </div>
   </div> 
     
       
     `
  
    
     });  
     
     id_news.innerHTML=htmlData
  
  }
  
  
  
  
  
  
  function getNews(){
    
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=254444e446864ed387ba8eaedf57d835`).
    then(res=>res.json()).then(data=>headlines(data))
  
  }
  
  
  function headlines(data){
    let news=data.articles;
    let htmlData=``
    news.forEach(function(article){
    let title=article.title;
    let image=article.urlToImage;
    let description=article.description;
    let content=article.content;
    let url=article.url;
    let time=article.publishedAt;
        
    htmlData+=`
  
  
    <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${image}" class="img-fluid rounded-start mt-2" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</
          <p class="card-text">${content}</p>
          <p class="card-text">${time}</p>
          <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
          <a href="${url}" class="btn btn-dark">Read more</a>
    
        </div>
      </div>
    </div>
  </div> 
    
      
  
      
    `
    });  
    
     id_news.innerHTML=htmlData;
   
  
     }
  
  
  
  function getBusiness(){
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=business&apikey=254444e446864ed387ba8eaedf57d835`).
    then(res=>res.json()).then(data=>business(data))
  
  
    function business(data){
      let news=data.sources;
      let htmlData=``
      news.forEach(function(sp){
      let name=sp.name;
      let description=sp.description;
      let url=sp.url;
      
          
      htmlData+=`
    
    
      <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
      <div class="row g-0">
        <div class="col-md-4">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>       
            <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
            <a href="${url}" class="btn btn-dark">Read more</a>
      
          </div>
        </div>
      </div>
    </div> 
      
        
    
        
      `
      });  
      
       id_news.innerHTML=htmlData;
     
    
       }
  
      }
  
      function getEntertainment(){
        fetch(`https://newsapi.org/v2/top-headlines/sources?category=entertainment&apikey=254444e446864ed387ba8eaedf57d835`).
        then(res=>res.json()).then(data=>entertainment(data))
      
      
        function entertainment(data){
          let news=data.sources;
          let htmlData=``
          news.forEach(function(sp){
          let name=sp.name;
          let description=sp.description;
          let url=sp.url;
          
              
          htmlData+=`
        
        
          <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
          <div class="row g-0">
            <div class="col-md-4">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>       
                <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                <a href="${url}" class="btn btn-dark">Read more</a>
          
              </div>
            </div>
          </div>
        </div> 
          
            
        
            
          `
          });  
          
           id_news.innerHTML=htmlData;
         
        
           }
      
          }
  
          function getHealth(){
            fetch(`https://newsapi.org/v2/top-headlines/sources?category=health&apikey=254444e446864ed387ba8eaedf57d835`).
            then(res=>res.json()).then(data=>health(data))
          
          
            function health(data){
              let news=data.sources;
              let htmlData=``
              news.forEach(function(sp){
              let name=sp.name;
              let description=sp.description;
              let url=sp.url;
              
                  
              htmlData+=`
            
            
              <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
              <div class="row g-0">
                <div class="col-md-4">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>       
                    <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                    <a href="${url}" class="btn btn-dark">Read more</a>
              
                  </div>
                </div>
              </div>
            </div> 
              
                
            
                
              `
              });  
              
               id_news.innerHTML=htmlData;
             
            
               }
          
              }
  
              function getScience(){
                fetch(`https://newsapi.org/v2/top-headlines/sources?category=science&apikey=254444e446864ed387ba8eaedf57d835`).
                then(res=>res.json()).then(data=>science(data))
              
              
                function science(data){
                  let news=data.sources;
                  let htmlData=``
                  news.forEach(function(sp){
                  let name=sp.name;
                  let description=sp.description;
                  let url=sp.url;
                  
                      
                  htmlData+=`
                
                
                  <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
                  <div class="row g-0">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${description}</p>       
                        <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                        <a href="${url}" class="btn btn-dark">Read more</a>
                  
                      </div>
                    </div>
                  </div>
                </div> 
                  
                    
                
                    
                  `
                  });  
                  
                   id_news.innerHTML=htmlData;
                 
                
                   }
              
                  }
                
                  function getSports(){
                    fetch(`https://newsapi.org/v2/top-headlines/sources?category=sports&apikey=254444e446864ed387ba8eaedf57d835`).
                    then(res=>res.json()).then(data=>sports(data))
                  
                  
                    function sports(data){
                      let news=data.sources;
                      let htmlData=``
                      news.forEach(function(sp){
                      let name=sp.name;
                      let description=sp.description;
                      let url=sp.url;
                      
                          
                      htmlData+=`
                    
                    
                      <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
                      <div class="row g-0">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>       
                            <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                            <a href="${url}" class="btn btn-dark">Read more</a>
                      
                          </div>
                        </div>
                      </div>
                    </div> 
                      
                        
                    
                        
                      `
                      });  
                      
                       id_news.innerHTML=htmlData;
                     
                    
                       }
                  
                      }
                      function getTechnology(){
                        fetch(`https://newsapi.org/v2/top-headlines/sources?category=technology&apikey=254444e446864ed387ba8eaedf57d835`).
                        then(res=>res.json()).then(data=>technology(data))
                      
                      
                        function technology(data){
                          let news=data.sources;
                          let htmlData=``
                          news.forEach(function(sp){
                          let name=sp.name;
                          let description=sp.description;
                          let url=sp.url;
                          
                              
                          htmlData+=`
                        
                        
                          <div class="card mb-3 ms-5 bg-dark" style="max-width: 350px;--bs-bg-opacity:60%;>
                          <div class="row g-0">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${description}</p>       
                                <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                                <a href="${url}" class="btn btn-dark">Read more</a>
                          
                              </div>
                            </div>
                          </div>
                        </div> 
                          
                            
                        
                            
                          `
                          });  
                          
                           id_news.innerHTML=htmlData;
                         
                        
                           }
                      
                          }
                        
                             
        
    
  