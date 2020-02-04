
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let drop= document.getElementById('breed-dropdown');
console.log('dog');

function fetchImg() {
  
  return fetch (imgUrl).then(resp=> resp.json()).then(json=>renderImg(packagejson));}
  
function renderImg(json){
  const main=document.getElementById('dog-image-container');
  console.log(json.message);
  const arr=json.message;
  for (image of arr) {
    const imgn= document.createElement('img');
    imgn.src=image;
    main.appendChild(imgn);
  }
}
