const optionOne= document.getElementById('optionOne');
const optiontwo= document.getElementById('optionTwo');
const optionThree= document.getElementById('optionThree');
const optionFour= document.getElementById('optionFour');

const textOne= document.getElementById('textOne')
const textTwo= document.getElementById('textTwo')
const textThree= document.getElementById('textThree')
const textFour= document.getElementById('textFour')

const spans = document.getElementsByClassName('span')

optionOne.addEventListener('change',() =>displayText(optionOne,textOne,spans[0]));
optiontwo.addEventListener('change',() =>displayText(optiontwo,textTwo,spans[1]));
optionThree.addEventListener('change',() =>displayText(optionThree,textThree,spans[2]));
optionFour.addEventListener('change',() =>displayText(optionFour,textFour,spans[3]));


function displayText(option,text,span){
    if (option.checked) {
        text.classList.add('display')
        span.style.backgroundImage='url("/assets/images/icon-minus.svg")';
        console.log(span.style.backgoundImage)

    } else{
        text.classList.remove('display')
        span.style.backgroundImage='url("/assets/images/icon-plus.svg")';
    }
    return
}