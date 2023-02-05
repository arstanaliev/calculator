let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '*', '/', '%']
const plus = ['+/-']


const out = document.querySelector('.cals-screen p')

function clearALl () {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearALl;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = ""

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent = b
        }
        out.textContent = a + sign + b
        console.log(a, sign, b);
        return;
    }

    if (action.includes(key)) {
        if (a) {
            sign = key
            out.textContent = a + sign;
            console.log(a, sign, b)
            return;
        }
        out.textContent = '0'
        return;

    }
    if (plus.includes(key)) {
        sign = key
        a = a * -1
        out.textContent = a
    }
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = a - b
                break;
            case '*':
                a = a * b
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка'
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b
                break;
            case '%':
                a = (a / 100) * b
                break
        }
        finish = true
        out.textContent = a;
        console.log(a, sign, b)
    }
}
