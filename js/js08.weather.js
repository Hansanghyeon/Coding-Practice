function onGeoSuecces(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log("당신이 거주하는 곳은", lat, long);
}

function onGeoError() {
  alert("당신의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuecces, onGeoError);

//모두가 만족할때 실행할 함수, 오류 발생시 실행될 함수
