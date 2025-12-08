main = document.querySelector('main');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '
let mainText = main.innerText;
let originalText = main.innerText;
let len = mainText.length;

let messages = ['Aalu Kahi ki, Kravu Message Change?', 'Aree Kaam krle meri Maa😅', 'B*hen ki                                                                                                                                                                                     ...., Samajh gyi hogi tu😂', 'Message bhi nhi krti, AALUUUU😡'];

let button = document.querySelector('button');

button.addEventListener('click',function () {
    main.innerText = messages[Math.floor(Math.random()*messages.length)];
    mainText = main.innerText;
    originalText = main.innerText;
    len = mainText.length;
})

let allow = true;
main.addEventListener('mouseenter',function(){
    button.disabled = true;
    button.style.opacity = '0.5';
    button.style.cursor = 'not-allowed'
    // main.style.pointerEvents = 'none';

    let iteration = 0;
    let inter = setInterval(() => {
        let sum = '';
        iteration+=0.8;
        // console.log("Hello ", iteration);
        mainText.split('').map((char, index)=>{
            if(index < iteration)
            {
                sum+=char;
            }
            else{
                sum+=characters[Math.floor(Math.random()*52)];
            }
        });
        main.innerText = sum;

        if(main.innerText === originalText)
        {
            clearInterval(inter);
            allow = true;
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }
    }, 100);


})

