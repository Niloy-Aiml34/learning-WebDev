const characters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':','"',"'",',','.','<','>','/','?','~','`'
];


generateButton = document.getElementById('generatebutton-el')


placeholder1EL = document.getElementById('placeholder1-el')
placeholder2EL = document.getElementById('placeholder2-el')


function getRandomInt(){
    return Math.floor(Math.random() * 93)
}

generateButton.addEventListener("click", function () {
    let password1 ="";
    let password2 ="";

    for(let i=0;i<15;i++){
        password1 += characters[getRandomInt()]
    }
    for(let i=0;i<15;i++){
        password2 += characters[getRandomInt()]
    }
    placeholder1EL.textContent = password1
    placeholder2EL.textContent = password2
    console.log(password1)
    console.log(password2)
});



