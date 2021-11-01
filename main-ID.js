

function Submit() {
  nameOf();
  checkMobile();
  checkAdres();
  validateEmailAdres();
  userId();
  addImage();
}

function nameOf() {
  let nameOf = document.getElementById("InputNaam").value.replaceAll("-", " ");
  document.getElementById("Naam").innerText = toCapitalize(nameOf);
}

function checkMobile() {
  let telefoon = document.getElementById("InputTelefoon").value;
  telefoon = telefoon.replaceAll(" ", "").replaceAll("-", "");
  if (telefoon.length < 10 || telefoon.length > 10) {
   alert("Gebruik een 06 nummer met 8 cijfers");
  } else {
    document.getElementById("Telefoon").innerText = telefoon.replace(
      "06",
      "+316 "
    );
  }
}

function checkAdres() {
  let adres =
    document.getElementById("InputAdres").value + " " +
    document.getElementById("InputHuisnummer").value + ", " +
    document.getElementById("InputPostcode").value.replaceAll(" ", "").replaceAll("-", "") + ", " + document.getElementById("InputStad").value;

  document.getElementById("Adres").innerText = toCapitalize(adres);
}
function validateEmailAdres() {
  let email = document.getElementById("InputEmail").value;
  if (email.toLowerCase().indexOf("@techgrounds.nl") < 1)
   alert("Gebruik een @techgrounds.nl email.");
  else {
   (document.getElementById("Email").innerText = toCapitalize(email));
  }
}
function userId() {
  let userId = document.getElementById("InputNaam").value;
  document.getElementById("userId").innerText =
    toCapitalize(userId).replaceAll(" ", "_").replaceAll("-", "_") +
    "-" +
    Math.floor(Math.random() * 50);
}

function addImage() {
  addImage = function () { };
  const img = document.createElement("img");
  img.src = "img_avatar.png";
  let image = document.getElementById("img");
  image.appendChild(img);


}

function toCapitalize(param) {
  param = param.toLowerCase();
  param = param.charAt(0).toUpperCase() + param.slice(1);
  let IndexOfSpace = param.indexOf(" ");
  if (IndexOfSpace >= 0) {
    let IndexOfRemainingString = IndexOfSpace + 1;
    let CurrentString = param.slice(0, IndexOfRemainingString);
    let RemainingString = toCapitalize(param.slice(IndexOfRemainingString));
    param = CurrentString + RemainingString;
  }
  return param;
}



function getPDF()  {
  html2canvas(document.getElementById("toPDF"),{
   onrendered:function(canvas){

   let img=canvas.toDataURL("image/png");
   let doc = new jsPDF('1', 'cm'); 
   doc.addImage(img,'PNG',1,2); 
   doc.save('idCard.pdf'); 
  }
}); 
}