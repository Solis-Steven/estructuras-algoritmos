(() => {
    const text = `hola HOLA Hola ¿hola?! hola!! Juan`

    function normalize(word) {
        return(word.toLowerCase().replace(/[.|,|;|¡|!|¿|?]/g, ""));
    }

    function wordRepetition(text) {
        const repetitions = {}

        const words = text.split(" ");

        for(let word of words) {
            const wordNormalized = normalize(word);
            if(wordNormalized in repetitions) {
                repetitions[wordNormalized]++;
            } else {
                repetitions[wordNormalized] = 1;
            }
        }

        return(repetitions);

    }

    console.log(wordRepetition(text));
    

})()