// let accordion = document.getElementsByClassName("accordion");
// for (let i = 0; i < accordion.length; i++) {
//     console.dir( accordion[i].parentElement);
//     accordion[i].addEventListener("click", function () {
//         let panel = this.nextElementSibling;
//         this.classList.toggle("accordion-active");
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }

let faqQuestion = document.getElementsByClassName("faq-question");
for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener("click", function () {
        let panel = this.children[1];
        this.classList.toggle("accordion-active");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}