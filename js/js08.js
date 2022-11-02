const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// Tag 만들기

bgImage.src = `../img/${chosenImage}`;
// 가상의 Tag

console.log(bgImage);

//document.body.appendChild(bgImage);
//body의 마지막에 () html을 추가한다.

// inserBefore() 메소드를 사용하면 중간에 태그를 넣을 수 있다.
// 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입한다.
const h1 = document.querySelector("#quote");
document.body.insertBefore(bgImage, h1);

// <div id="quote">...</div> 위에 `../img/${chosenImage}`가 삽입된다.
//
