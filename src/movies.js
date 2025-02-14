// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(arr => arr.director)
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const stevenArr = moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    return stevenArr.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const sumScore = moviesArray.reduce((acc, movies) => {
        if(movies.score){
            acc += movies.score
        }
            return acc; }, 0);
            return Math.round((sumScore/moviesArray.length)*100)/100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
   
    
    const dramaOnly = moviesArray.filter((movies) => {
      movies.genre.includes("Drama")
    });

    if(dramaOnly.length === 0){
        return 0;
    }

    const sumScore = dramaOnly.reduce((acc, movie) =>{
        acc + movie.score}, 0);

        return Math.round((sumScore/moviesArray.lenght)*100)/100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const arr = moviesArray.slice().sort((a, b) =>{
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year-b.year;
    });
    return arr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrSorted = moviesArray.map(movie => movie.title).sort((a, b) =>{
        a.title - b.title

    });
    return arrSorted.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
