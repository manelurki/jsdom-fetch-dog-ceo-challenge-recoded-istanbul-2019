
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let drop= document.getElementById('breed-dropdown');
console.log('dog');

Function fetchImg() {
  
  return fetch (imgUrl).then(resp=> resp.json()).then(json=>renderImg(packagejson));}
  
}
