var firstCol = document.getElementById('firstCol');
var secondCol = document.getElementById('secondCol');
var thirdCol = document.getElementById('thirdCol');
var container = document.getElementById('container');


function show(sw) {
  var pic;
  switch (sw) {
    case 0:
      pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/237px-Civil_Ensign_of_Switzerland.svg.png";
      document.getElementById('name').innerHTML = 'Switzerland';
      break;
    case 1:
      pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1182px-Flag_of_Belgium.svg.png";
      document.getElementById('name').innerHTML = 'Belgium';
      break;
    case 2:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png";
      document.getElementById('name').innerHTML = 'Germany';
    break;
    case 3:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/2560px-Flag_of_Ireland.svg.png";
      document.getElementById('name').innerHTML = 'Ireland';
      break;
    case 4:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png?20090714053857";
      document.getElementById('name').innerHTML = 'Finland';
      break;
  }
      document.getElementById('flagimage').src = pic;}
function show2(sw) {
  var pic;
  switch (sw) {
    case 0:
      pic = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
      document.getElementById('name').innerHTML = 'United_States';
      break;
    case 1:
      pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/2560px-Flag_of_Moldova.svg.png";
      document.getElementById('name').innerHTML = 'Moldova';
      break;
    case 2:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png";
      document.getElementById('name').innerHTML = 'Italy';
      break;
    case 3:
      pic ="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png";
      document.getElementById('name').innerHTML = 'India';
      break;
    case 4:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2560px-Flag_of_Greece.svg.png";
      document.getElementById('name').innerHTML = 'Greece';
      break;

  }
  document.getElementById('flagimage2').src = pic;}
function show3(sw) {
  var pic;
  switch (sw) {
    case 0:
      pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/800px-Bandera_de_Espa%C3%B1a.svg.png";
      document.getElementById('name').innerHTML = 'Spain';
      break;
    case 1:
      pic = "https://www.orange.ro/images-102019/flags/4x3/fr.30ed2f68dc9a17927643640f48f3d2a858bd041770547035349c6e79713cd84e.svg";
      document.getElementById('name').innerHTML = 'France';
      break;
    case 2:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_Poland_%28bordered%29.svg/2560px-Flag_of_Poland_%28bordered%29.svg.png";
      document.getElementById('name').innerHTML = 'Poland';
      break;
    case 3:
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png";
      document.getElementById('name').innerHTML = 'China';
      break;
    case 4:
      document.getElementById('name').innerHTML = 'Japan';
      pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png";
      break;
  }
  document.getElementById('flagimage3').src = pic;}
function reset(){
  document.getElementById('name').innerHTML = 'Flag';
  document.getElementById("switzerland").checked = true;
  document.getElementById('flagimage').src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/237px-Civil_Ensign_of_Switzerland.svg.png";
  document.getElementById("america").checked = true;
  document.getElementById('flagimage2').src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
  document.getElementById("Spain").checked = true;
  document.getElementById('flagimage3').src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/800px-Bandera_de_Espa%C3%B1a.svg.png";
  resetColors();

}
function getColor() {
  const colors = ['00', '0F', '5F', 'AF', 'FF'];
  const fisrIndex = getActiveIndex(firstCol);
  console.log(fisrIndex);
  const red = colors[fisrIndex];
  const green = colors[getActiveIndex(secondCol)];
  const blue = colors[getActiveIndex(thirdCol)];
  return `#${red}${green}${blue}`;
}

function resetColors() {
  firstCol.style.borderColor = 'transparent';
  secondCol.style.borderColor = 'transparent';
  thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
  let i;
  const inputs = element.getElementsByTagName('input');
  for (i =0; i< 5; i++) {
    if (inputs.item(i).checked) {
      return i;
    }
  }

  return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
  resetColors();
  firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
  resetColors();
  secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
  resetColors();
  thirdCol.style.borderColor = getColor();
});
