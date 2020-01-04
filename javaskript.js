function otvori(evt, imeVocke) {
  
  var i, sadrzajtaba, tabovi;

  sadrzajtaba = document.getElementsByClassName("sadrzajtaba");
  for (i = 0; i < sadrzajtaba.length; i++) {
    sadrzajtaba[i].style.display = "none";
  }

  tabovi = document.getElementsByClassName("tabovi");
  for (i = 0; i < tabovi.length; i++) {
    tabovi[i].className = tabovi[i].className.replace(" active", "");
  }

  document.getElementById(imeVocke).style.display = "block";
  evt.currentTarget.className += " active";
}