
const questions = document.querySelectorAll(".questions"); 

questions.forEach( (question)=> {
    const btn = question.querySelector(".buttons"); 

    btn.addEventListener("click", () => { 

        questions.forEach((item) => { //old click value
            if(item !== question) { //when current click and prev click are different we are removing the show-text
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");

    })
})