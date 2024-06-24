// /* Look for any elements with the class "holidays_buttons_mob": */
// let customSelectElements = document.getElementsByClassName("holidays_buttons_mob");

// let numOfSelects = customSelectElements.length;
// for (let i = 0; i < numOfSelects; i++) {
//   let selectElement = customSelectElements[i].getElementsByTagName("select")[0];
//   let numOfOptions = selectElement.length;
  
//   /* For each element, create a new DIV that will act as the selected item: */
//   let selectedDiv = document.createElement("DIV");
//   selectedDiv.setAttribute("class", "select-selected");
//   let p = document.createElement("P");
//   p.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
//   selectedDiv.appendChild(p);
//   customSelectElements[i].appendChild(selectedDiv);

//   /* For each element, create a new DIV that will contain the option list: */
//   let optionsDiv = document.createElement("DIV");
//   optionsDiv.setAttribute("class", "select-items select-hide");
  
//   for (let j = 0; j < numOfOptions; j++) { // Start from 0 to include all options
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     let optionDiv = document.createElement("DIV");
//     let optionParagraph = document.createElement("P");
//     optionParagraph.innerHTML = selectElement.options[j].innerHTML;
//     optionDiv.appendChild(optionParagraph);
//     optionDiv.addEventListener("click", function(e) {
//       /* When an item is clicked, update the original select box,
//       and the selected item: */
//       var y, originalSelect, selectedDiv, originalSelectLength, selectedOptions;
//       originalSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       originalSelectLength = originalSelect.length;
//       selectedDiv = this.parentNode.previousSibling;
      
//       for (let k = 0; k < originalSelectLength; k++) {
//         if (originalSelect.options[k].innerHTML == this.textContent) {
//           originalSelect.selectedIndex = k;
//           selectedDiv.querySelector('p').innerHTML = this.textContent;
//           selectedOptions = this.parentNode.getElementsByClassName("same-as-selected");
//           for (let l = 0; l < selectedOptions.length; l++) {
//             selectedOptions[l].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       selectedDiv.click();
//     });
//     optionsDiv.appendChild(optionDiv);
//   }
//   customSelectElements[i].appendChild(optionsDiv);
//   selectedDiv.addEventListener("click", function(e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }

// function closeAllSelect(currentSelected) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var optionsDivs, selectedDivs, i, optionsDivsLength, selectedDivsLength, arrNo = [];
//   optionsDivs = document.getElementsByClassName("select-items");
//   selectedDivs = document.getElementsByClassName("select-selected");
//   optionsDivsLength = optionsDivs.length;
//   selectedDivsLength = selectedDivs.length;
//   for (i = 0; i < selectedDivsLength; i++) {
//     if (currentSelected == selectedDivs[i]) {
//       arrNo.push(i);
//     } else {
//       selectedDivs[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < optionsDivsLength; i++) {
//     if (!arrNo.includes(i)) { // Fix the condition to properly close other selects
//       optionsDivs[i].classList.add("select-hide");
//     }
//   }
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", function() {
//   closeAllSelect(null);
// });


/* Look for any elements with the class "holidays_buttons_mob": */
let customSelectElements = document.getElementsByClassName("holidays_buttons_mob");

let numOfSelects = customSelectElements.length;
for (let i = 0; i < numOfSelects; i++) {
  let selectElement = customSelectElements[i].getElementsByTagName("select")[0];
  let numOfOptions = selectElement.length;

  /* For each element, create a new DIV that will act as the selected item: */
  let selectedDiv = document.createElement("DIV");
  selectedDiv.setAttribute("class", "select-selected");
  let p = document.createElement("P");
  p.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
  selectedDiv.appendChild(p);
  customSelectElements[i].appendChild(selectedDiv);

  /* For each element, create a new DIV that will contain the option list: */
  let optionsDiv = document.createElement("DIV");
  optionsDiv.setAttribute("class", "select-items select-hide");

  for (let j = 0; j < numOfOptions; j++) {
    /* For each option in the original select element, create a new DIV that will act as an option item: */
    let optionDiv = document.createElement("DIV");
    let optionParagraph = document.createElement("P");
    optionParagraph.innerHTML = selectElement.options[j].innerHTML;
    optionDiv.appendChild(optionParagraph);

    /* Set data attributes and onclick event */
    let dataFilter = selectElement.options[j].getAttribute('data-filter');
    let onClickValue = `filterSelection('${dataFilter}')`;

    optionDiv.setAttribute('data-filter', dataFilter);
    optionDiv.setAttribute('onclick', onClickValue);

    optionDiv.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box, and the selected item: */
      var y, k, originalSelect, selectedDiv, originalSelectLength, selectedOptions;
      originalSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
      originalSelectLength = originalSelect.length;
      selectedDiv = this.parentNode.previousSibling;
      
      for (k = 0; k < originalSelectLength; k++) {
        if (originalSelect.options[k].innerHTML == this.textContent) {
          originalSelect.selectedIndex = k;
          selectedDiv.querySelector('p').innerHTML = this.textContent;
          selectedOptions = this.parentNode.getElementsByClassName("same-as-selected");
          for (let l = 0; l < selectedOptions.length; l++) {
            selectedOptions[l].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      selectedDiv.click();
    });

    optionsDiv.appendChild(optionDiv);
  }
  customSelectElements[i].appendChild(optionsDiv);
  selectedDiv.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes, and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(currentSelected) {
  /* A function that will close all select boxes in the document, except the current select box: */
  var optionsDivs, selectedDivs, i, optionsDivsLength, selectedDivsLength, arrNo = [];
  optionsDivs = document.getElementsByClassName("select-items");
  selectedDivs = document.getElementsByClassName("select-selected");
  optionsDivsLength = optionsDivs.length;
  selectedDivsLength = selectedDivs.length;
  for (i = 0; i < selectedDivsLength; i++) {
    if (currentSelected == selectedDivs[i]) {
      arrNo.push(i);
    } else {
      selectedDivs[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < optionsDivsLength; i++) {
    if (!arrNo.includes(i)) {
      optionsDivs[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box, then close all select boxes: */
document.addEventListener("click", function() {
  closeAllSelect(null);
});
