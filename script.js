

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '').trim();
        
            if (a && b && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log("done")
            }else{
                console.log("error")
                i--
            }   
        }
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >=10 && personalMovieDB.count<30){
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count >=30){
            console.log("Вы киноман");
        }else{
            console.log("error")
        } 
    },
    writeYourGenres: function (){
        for (let i = 1; i < 4; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`)
            if (genre == "" || genre == null){
                console.log("Вы ввели некорректные данные");
                i--
            }else {personalMovieDB.genres.push(genre)}          
        }
        personalMovieDB.genres.forEach((item,i)=> console.log(`Любимый жанр # ${i+1} - это ${item}`))
    },   
    showMyDb: function (hidden){
        if(!hidden){
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDb: function(){
        personalMovieDB.privat = !personalMovieDB.privat
    }
};








