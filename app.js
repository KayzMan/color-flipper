const body = document.querySelector('body')
const result = document.querySelector('.result')
const clickme_btn = document.querySelector('#randomize')
const auto_btn = document.querySelector('#auto')
const navBtns = document.querySelectorAll('.nav-btn')
var mode = 'text'
var start = false

clickme_btn.addEventListener('click', randomColor)

auto_btn.addEventListener('click', () => {
    start = !start
    let timerId = setInterval(() => {
        if(start){
            randomColor();
        }else{
            clearInterval(timerId);
        }
    }, 500);
})

function randomColor(){
    // generate a random number
    let num1 = Math.floor(Math.random() * 99)
    let num2 = Math.floor(Math.random() * 99)
    let num3 = Math.floor(Math.random() * 99)

    num1 = num1 < 10 ? '0' + num1: num1
    num2 = num2 < 10 ? '0' + num2: num2
    num3 = num3 < 10 ? '0' + num3: num3
    let hex_color = `#${num1}${num2}${num3}`

    let simple_color = `rgb(${num1}, ${num2}, ${num3})`

    let colors = ['black', 'deepskyblue', 'white', 'rebeccapurple', 'darkgreen', 'darkred', 'purple', 'orangered', 'orange', 'aqua', 'saddlebrown',
        'sandybrown', 'blue', 'red', 'steelblue', 'blueviolet', 'darkgray', 'green', 'yellow', 'lightgray', 'skyblue', 'gray', 'aliceblue', 'antiquewhite', 'aquamarine',
        'azure', 'beige', 'bisque', 'blanchedalmond', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
        'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darksalmon', 'darkseagreen', 'darkslateblue',
        'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite',
        'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory',
        'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue',
        'lightseagreen', 'lightskyblue', 'lightslategrey', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue',
        'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred',
        'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'salmon', 'seagreen', 'seashell', 'sienna', 'silver', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen']
    let text_color = colors[Math.floor(Math.random() * (colors.length - 1))];

    if(mode === 'hex'){
        body.style.backgroundColor = hex_color;
        result.innerText = hex_color;
    }

    if(mode === 'text'){
        body.style.backgroundColor = text_color;
        result.innerText = text_color;
    }

    if(mode === 'simple'){
        body.style.backgroundColor = simple_color;
        result.innerText = simple_color;
    }

}

navBtns[0].addEventListener('click', () => {
    navBtns[0].style.color = 'deepskyblue'
    navBtns[1].style.color = 'black'
    navBtns[2].style.color = 'black'
    mode = 'text'
});

navBtns[1].addEventListener('click', () => {
    navBtns[1].style.color = 'deepskyblue'
    navBtns[0].style.color = 'black'
    navBtns[2].style.color = 'black'
    mode = 'simple'
});

navBtns[2].addEventListener('click', () => {
    navBtns[2].style.color = 'deepskyblue'
    navBtns[0].style.color = 'black'
    navBtns[1].style.color = 'black'
    mode = 'hex'
});
