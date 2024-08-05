let a=document.querySelector("#description");
let b=document.querySelector("#name");
let c=document.querySelector("#poster");
let btn=document.querySelector("#button");
let d=document.querySelector("#query")
btn.addEventListener("click",()=>{
  movie();
  })
let movie= async ()=>{
  let query = d.value;
  let URL = `https://api.themoviedb.org/3/search/movie?api_key=a336e82849fc0c8a11b81f5a14623660&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
  let response=await fetch(URL);
 let data=await response.json();
 console.log(data);
 b.innerText=data.results[0].title;
 console.log(b);
 a.innerText=data.results[0].overview;
 console.log(a);
 c.src = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
 console.log(c);
}
