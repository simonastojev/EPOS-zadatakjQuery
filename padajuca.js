function myFunction() {
    document.getElementById("mypadajuci_meni").classList.toggle("show");
  }
  
    window.onclick = function(event) {
    if (!event.target.matches('.dugme')) {
      var dropdowns = document.getElementsByClassName("sadrzaj");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }