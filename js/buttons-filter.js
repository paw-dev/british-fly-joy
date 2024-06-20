
function filterSelection(e) {
    let filter = document.getElementsByClassName("filter-card");
    // if (e == "all") e = "";
    for (let i = 0; i < filter.length; i++) {
      let classes = filter[i].classList;
      if (e == "" || classes.contains(e)) {
        classes.add("show");
      } else {
        classes.remove("show");
      }
    }
  }
  
  // Add active class
  let btnContainer = document.getElementsByClassName('holidays_buttons');
  let btns = document.querySelectorAll('.holidays_button');
  for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      btn.addEventListener('click', function () {
         let active = document.getElementsByClassName('active-filter');
         active[0].className = active[0].className.replace(" active-filter", "");
         this.className += " active-filter";
      })   
  }
  
  
  let activeBtn;
  
  // есть ли класс "active"
  for (let i = 0; i < btns.length; i++) {
      if (btns[i].classList.contains('active-filter')) {
          activeBtn = btns[i]
      }
    //   console.log(activeBtn);
  }
//   console.log(activeBtn);
  filterSelection(activeBtn.dataset.filter);
  