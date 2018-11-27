const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    const allHands = document.querySelectorAll('.hand')

    function setDate(){

      const now = new Date();

      const hour = now.getHours();
      const hoursDegrees = ((hour/12)*360)+90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`; //change the rotation of this hand

      const minute = now.getMinutes();
      const minutesDegrees = ((minute/60)*360)+90;
      minHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const second = now.getSeconds();
      const secondsDegrees = ((second/60)*360)+90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      if(secondsDegrees === 90) { //this avoid the reset of the clock
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
}

    }

    setInterval(setDate, 1000);