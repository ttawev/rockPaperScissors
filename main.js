let btn = document.querySelectorAll('button')


Array.from(btn).map(el => {
    el.addEventListener('click', (e) => {
        let player = e.target.value;

        let randomNum = Math.floor(Math.random() * 100)
        let bot

        randomNum > 66 ? bot = 'scissors' : 
        randomNum < 33 ? bot = 'paper' : 
        bot = 'stone'; 


        player === 'scissors' && bot === 'scissors' ? alert('Ничья') :
        player === 'scissors' && bot === 'paper' ? alert('Победа') :
        player === 'scissors' && bot === 'stone' ? alert('Поражение') :
        player === 'paper' && bot === 'scissors' ? alert('Поражение') :
        player === 'paper' && bot === 'paper' ? alert('Ничья') :
        player === 'paper' && bot === 'stone' ? alert('Победа') :
        player === 'stone' && bot === 'scissors' ? alert('Победа') :
        player === 'stone' && bot === 'paper' ? alert('Поражение') :
         alert('Ничья') 


    })
})




