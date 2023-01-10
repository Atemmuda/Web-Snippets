const btn = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
    'Message Seven'
]

const type =[
    'error',
    'successful',
    'info'
]

btn.addEventListener('click',() => getNotification())

function getNotification(message = null,type = null){
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.classList.add(type ? type : getRandomType());
        toast.innerText = message ? message : getRandomMessage();
        toasts.appendChild(toast);

        setTimeout(() => {
           toast.remove();
        },2000)
}

function getRandomType(){
    return type[Math.floor(Math.random() * type.length)];
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}