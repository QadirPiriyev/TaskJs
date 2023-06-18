// var carModels = {
//     audi: ["A1", "A3", "A5"],
//     bmw: ["330", "5series", "730"],
//     mercedes: ["s650", "C-300", "E-220",]
//   };
  
//   var cars = {
//     audi_a1: "./pictures/images.jpg",
//     audi_a3: "./pictures/2021-audi-a3-sedan-debut.webp",
//     audi_a5: "./pictures/download.jpg",
  
//     bmw_330: "./pictures/download (1).jpg",
//     bmw_5series: "./pictures/download (2).jpg",
//     bmw_730: "./pictures/download (3).jpg",

//     mercedes_aserisi: "resimler/mercedes_aserisi.jpg",
//     mercedes_cserisi: "resimler/mercedes_cserisi.jpg",
//     mercedes_eserisi: "resimler/mercedes_eserisi.jpg"
//   };
  
//   function modelGetir() {
//     var markaSecim = document.getElementById("marka");
//     var modelSecim = document.getElementById("model");
  
//     modelSecim.innerHTML = ""; 
  
//     var seciliMarka = markaSecim.value;
//     var modeller = carModels[seciliMarka];
  
//     if (modeller) {
//       for (var i = 0; i < modeller.length; i++) {
//         var option = document.createElement("option");
//         option.text = modeller[i];
//         option.value = modeller[i];
//         modelSecim.appendChild(option);
//       }
//     } else {
//       var option = document.createElement("option");
//       option.text = "bir marka seçin";
//       modelSecim.appendChild(option);
//     }
//   }
  
//   function araVeResimYansit() {
//     var markaSecim = document.getElementById("marka");
//     var modelSecim = document.getElementById("model");
//     var seciliMarka = markaSecim.value;
//     var seciliModel = modelSecim.value;
  
//     if (seciliMarka && seciliModel) {
//       var photoKey = seciliMarka.toLowerCase() + "_" + seciliModel.toLowerCase();
//       var photoURL = cars[photoKey];
  
//       var photoDiv = document.getElementById("photo");
//       photoDiv.innerHTML = "";
//       var photo = document.createElement("img");
//       photo.src = photoURL;
//       photoDiv.appendChild(photo);
//     }
//   }

var carModels = {
    audi: ["A1", "A3", "A5"],
    bmw: ["330", "5series", "730"],
  };
  
  var cars = {
    audi_a1: "./pictures/images.jpg",
    audi_a3: "./pictures/2021-audi-a3-sedan-debut.webp",
    audi_a5: "./pictures/download.jpg",
  
    bmw_330: "./pictures/download (1).jpg",
    bmw_5series: "./pictures/download (2).jpg",
    bmw_730: "./pictures/download (3).jpg",
  
  };
  
  function takeModel() {
    var markaSecim = document.getElementById("marka");
    var modelSecim = document.getElementById("model");
  
    // Model seçimini sıfırla
    modelSecim.innerHTML = "";
    // İlk seçenek olarak "Model Seç"i ekle
    var option = document.createElement("option");
    option.text = "Model Seç";
    option.value = "";
    modelSecim.appendChild(option);
  
    var seciliMarka = markaSecim.value;
    var modeller = carModels[seciliMarka];
  
    if (modeller) {
      for (var i = 0; i < modeller.length; i++) {
        var option = document.createElement("option");
        option.text = modeller[i];
        option.value = modeller[i];
        modelSecim.appendChild(option);
      }
    }
  }
  
  function searchAndShowPhoto() {
    var markaSecim = document.getElementById("marka");
    var modelSecim = document.getElementById("model");
    var seciliMarka = markaSecim.value;
    var seciliModel = modelSecim.value;
  
    var photoDiv = document.getElementById("photo");
    photoDiv.innerHTML = "";
  
    if (seciliMarka && seciliModel) {
      var photoKey = seciliMarka.toLowerCase() + "_" + seciliModel.toLowerCase();
      var photoURL = cars[photoKey];
  
      var photo = document.createElement("img");
      photo.src = photoURL;
      photoDiv.appendChild(photo);
    } else {
      // Resmi temizle
      var photo = document.createElement("img");
      photo.src = "";
      photoDiv.appendChild(photo);
    }
  }
  
  function markaDegisti() {

    var modelSecim = document.getElementById("model");
    

    modelSecim.innerHTML = "<option value=''>Model Seç</option>";

    var photoDiv = document.getElementById("photo");
    photoDiv.innerHTML = "";
  }
  
  window.onload = function () {
    var modelSecim = document.getElementById("model");
    modelSecim.innerHTML = "<option value=''>Model Seç</option>";
  };
  