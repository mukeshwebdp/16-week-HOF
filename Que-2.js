// create random number
        function generateRandomNumber(){
            return Math.floor(Math.random()*1000);
        }
            // make delay number
        function delayWithGenerateRandomNumber(delayInSecond){
            console.log(`Generating a random number after  delay of ${delayInSecond} sencond`);
            let countdown = delayInSecond;
            // delay number execute
                const countdownInterval = setInterval(() => {
                    console.log(`Please wait ${countdown}`);
                    countdown--;
                        // set interval clear
                    if(countdown === 0){
                        clearInterval(countdownInterval)
                        let randomNumber = generateRandomNumber()
                        console.log(`Random number generated: ${randomNumber}`);
                    }
                }, 1000);
        }
        delayWithGenerateRandomNumber(3)