const sounds = ['s1', 's2', 's3',  's4']

sounds.forEach(sound => {
    //stopSong()

    const btn =document.createElement('button')
    btn.classList.add('btn')

    btn.innerHTML = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSong(){
     sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}