window.addEventListener("load", () => {

    string_to_array = function (str) {
        return str.trim().split(' ');
    };

    let paragraph = "Some day you cross this thin line and you really realize that we need to protect ourselves from ourselves. Time ticks by; we grow older. Before we know it, too much time has passed and we’ve missed the chance to have had other people hurt us. To a younger me this sounded like luck; to an older me this sounds like a quiet tragedy. Now: I believe that you’ve had most of your important memories by the time you’re thirty. And then I felt sad because I realized that once people are broken in certain ways, they can’t ever be fixed, and this is something nobody ever tells you when you are young and it never fails to surprise you as you grow older as you see the people in your life break one by one. You wonder when your turn is going to be, or if it’s already happened"
    let paragraph_array = string_to_array(paragraph)

    let allWords = []
    for (let i = 0; i < paragraph_array.length; i++){
        oneWord = paragraph_array[i]
        oneWord = oneWord.replace(',','')
        oneWord = oneWord.replace(';','')
        oneWord = oneWord.replace('.','')
        oneWord = oneWord.replace('"','')
        oneWord = oneWord.replace(':','')
        oneWord = oneWord.toLowerCase()
        if (oneWord.length > 2){
            allWords.push(oneWord)
        }
    }

    words = allWords.filter(function(word, index) {
        return allWords.indexOf(word) == index;
    })

    words_ceil = words.length -1;





    setInterval(myTimer, 35);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    let elemento1 = {
        horizontal: getRandomNumber(-50, 50),
        vertical: getRandomNumber(-50, 50),
    }

    let elemento2 = {
        horizontal: getRandomNumber(-50, 50),
        vertical: getRandomNumber(-50, 100),
    }

    let elemento3 = {
        horizontal: getRandomNumber(-50, 50),
        vertical: getRandomNumber(-50, 50),
    }

    

    let backGcolor = {
        r: getRandomNumber(10, 230),
        g: getRandomNumber(10, 230),
        b: getRandomNumber(10, 230),
        directionR: true,
        directionG: true,
        directionB: true,
        fusion: getRandomNumber(2, 40),
        fusionDir: true,
        degree: getRandomNumber(25, 65),
        degreeDir: true
    }

    let difusion1
    let degree

    let count = 0

    let insertHtml_1 = document.getElementById("insertHtml")
    let insertHtml_2 = document.getElementById("insertHtml_2")
    let insertHtml_3 = document.getElementById("insertHtml_3")

    function myTimer() {
        count ++
        
        // Inicio
        if (count == 1){
            let numero = getRandomInt(0, words_ceil);
            insertHtml_1.innerHTML = words[numero];
        }

        if (count == 4){
            let numero = getRandomInt(0, words_ceil);
            insertHtml_2.innerHTML = words[numero];
        }

        if (count == 10){
            let numero = getRandomInt(0, words_ceil);
            insertHtml_3.innerHTML = words[numero];
        }


        // Character
        if (count % 14 == 0){
            let numero = getRandomInt(0, words_ceil);
            insertHtml_1.innerHTML = words[numero];
        }

        if (count % 18 == 0){
            let numero = getRandomInt(0, words_ceil);
            insertHtml_2.innerHTML = words[numero];
        }

        if (count % 22 == 0){
            let numero = getRandomInt(0, words_ceil);
            insertHtml_3.innerHTML = words[numero];
        }



        // Movimiento
        if (count % 4 == 0){
            switch(getRandomNumber(0, 4)) {
                case 0:
                    elemento1.horizontal = elemento1.horizontal +5;
                break;
                case 1:
                    elemento1.horizontal = elemento1.horizontal -4;
                break;
                case 2:
                    elemento1.vertical = elemento1.vertical + 5;
                break;
                case 3:
                    elemento1.vertical = elemento1.vertical - 4;
                break;   
            }
            
            insertHtml_1.style.left = elemento1.horizontal + 'px';
            insertHtml_1.style.top = elemento1.vertical + 'px';
        }

        

        if (count % 5 == 0){
            switch(getRandomNumber(0, 4)) {
                case 0:
                    elemento2.horizontal = elemento2.horizontal +4;
                break;
                case 1:
                    elemento2.horizontal = elemento2.horizontal -5;
                break;
                case 2:
                    elemento2.vertical = elemento2.vertical + 4;
                break;
                case 3:
                    elemento2.vertical = elemento2.vertical - 5;
                break;   
            }
            
            insertHtml_2.style.left = elemento2.horizontal + 'px';
            insertHtml_2.style.top = elemento2.vertical + 'px';
        }

        

        if (count % 6 == 0){
            switch(getRandomNumber(0, 4)) {
                case 0:
                    elemento3.horizontal = elemento3.horizontal +6;
                break;
                case 1:
                    elemento3.horizontal = elemento3.horizontal -5;
                break;
                case 2:
                    elemento3.vertical = elemento3.vertical + 4;
                break;
                case 3:
                    elemento3.vertical = elemento3.vertical - 5;
                break;   
            }
            
            insertHtml_3.style.left = elemento3.horizontal + 'px';
            insertHtml_3.style.top = elemento3.vertical + 'px';
        }

        // Ocultar

        if (count % 51 == 0){
            insertHtml_1.innerHTML = '';
        }


        if (count % 61 == 0 || count % 62 == 0){
            insertHtml_2.innerHTML = '';
        }

        if (count % 45 == 0){
            insertHtml_3.innerHTML = '';
        }

        // font-size: 0px;
        if (count % 11 == 0){
            let numero = getRandomNumber(12, 50);
            insertHtml_1.style.fontSize = numero + 'px'
        }

        if (count % 17 == 0){
            let numero = getRandomNumber(12, 55);
            insertHtml_2.style.fontSize = numero + 'px'
        }

        if (count % 14 == 0){
            let numero = getRandomNumber(18, 42);
            insertHtml_3.style.fontSize = numero + 'px'
        }

        // Background Color
        switch(getRandomNumber(0, 3)) {
            case 0:
                if (backGcolor.directionR == true){
                    backGcolor.r = backGcolor.r + 2
                    if (backGcolor.r >= 230){
                        backGcolor.directionR = false
                    }
                } else if (backGcolor.directionR == false){
                    backGcolor.r = backGcolor.r - 2
                    if (backGcolor.r <= 10){
                        backGcolor.directionR = true
                    }
                }
                // console.log('R:',backGcolor.r, backGcolor.directionR);
            break;
            case 1:
                if (backGcolor.directionG == true){
                    backGcolor.g = backGcolor.g + 2
                    if (backGcolor.g > 230){
                        backGcolor.directionG = false
                    }
                } else if (backGcolor.directionG == false){
                    backGcolor.g = backGcolor.g - 2
                    if (backGcolor.g < 10){
                        backGcolor.directionG = true
                    }
                }
                // console.log('G:', backGcolor.g, backGcolor.directionG);
            break;
            case 2:
                if (backGcolor.directionB == true){
                    backGcolor.b = backGcolor.b + 2
                    if (backGcolor.b > 230){
                        backGcolor.directionB = false
                    }
                } else if (backGcolor.directionB == false){b
                    backGcolor.b = backGcolor.b - 2
                    if (backGcolor.b < 10){
                        backGcolor.directionB = true
                    }
                }
                // console.log('B:', backGcolor.b, backGcolor.directionB);
            break;
        }


        if (count % 5 == 0){
            if (backGcolor.fusionDir == true && backGcolor.fusion < 40){
                backGcolor.fusion = backGcolor.fusion + 1;
            }

            if (backGcolor.fusion >= 40) {
                backGcolor.fusionDir = false;
            }

            if (backGcolor.fusionDir == false && backGcolor.fusion > 2){
                backGcolor.fusion = backGcolor.fusion - 1
            }

            if (backGcolor.fusion <= 2) {
                backGcolor.fusionDir = true;
            }
            difusion1 = backGcolor.fusion
        }


        if (count % 15 == 0){
            if (backGcolor.degreeDir == true && backGcolor.degree < 65){
                backGcolor.degree = backGcolor.degree + 1;
            }

            if (backGcolor.degree >= 65) {
                backGcolor.degreeDir = false;
            }

            if (backGcolor.degreeDir == false && backGcolor.degree > 25){
                backGcolor.degree = backGcolor.degree - 1
            }

            if (backGcolor.degree <= 25) {
                backGcolor.degreeDir = true;
            }

            degree = backGcolor.degree
            console.log(degree);
        }

        document.body.style.backgroundImage = 'linear-gradient(' + degree + 'deg, rgb(' + backGcolor.r + ',' + backGcolor.g + ',' + backGcolor.b + ')' + difusion1 + '%, rgb(' + backGcolor.b + ',' + backGcolor.r + ',' + backGcolor.g + ')'

    }

})