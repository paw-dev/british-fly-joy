var i, j, l, select, selectItems, c;
/* Look for any elements with the class "custom-select": */
let holidays_buttons_mob = document.getElementsByClassName("holidays_buttons_mob");
for (i = 0; i < holidays_buttons_mob.length; i++) {
    let select = holidays_buttons_mob[i].getElementsByTagName("select")[0];
    let selectLength = select.length;

    /* For each element, create a new DIV that will act as the selected item: */
    let div = document.createElement("DIV");
    div.setAttribute("class", "select-selected");
    holidays_buttons_mob[i].appendChild(div);
    let p = document.createElement("P");
    p.innerHTML = select.options[select.selectedIndex].innerHTML;
    div.appendChild(p);
    

    /* For each element, create a new DIV that will contain the option list: */
    selectItems = document.createElement("DIV");
    selectItems.setAttribute("class", "select-items select-hide");
    
    for (j = 1; j < selectLength; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        let pSelectItems = document.createElement("P");
        c.innerHTML = select.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    console.log(yl);
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        selectItems.appendChild(c);
        // selectItems.appendChild(pSelectItems);
    }
    holidays_buttons_mob[i].appendChild(selectItems);
    div.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



