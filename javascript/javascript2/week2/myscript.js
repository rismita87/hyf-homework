//Doubling of number
const numbers = [1, 2, 3, 4];
const doubledOddNumberArray = numbers
  .filter((x) => x % 2 === 1)
  .map((oddNumber) => oddNumber * 2);
console.log(doubledOddNumberArray);

//1. to create an array of movies containing the movies with a short(less than 5 characters) title
const shortTitledMovie = movies.filter((movie) => movie.title.length < 5);
console.log(shortTitledMovie);

//2. to create an array of movie titles with long (more than 40 characters) movie titles
const longTitledMovie = movies.filter((movie) => movie.title.length > 40);
console.log(longTitledMovie);

//3. Count the number of movies made between 1980-1989 (including both the years)
const numberOfMovies = movies.reduce((sum, movie) => {
  if (movie.year >= 1980 && movie.year <= 1989) {
    sum = sum + 1;
  }
  return sum;
}, 0);
console.log("The number of movies made between 1980-1989 is " + numberOfMovies);

//4. To create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const arrayWithExtraKyeTag = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  }
  if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  }
  if (movie.rating < 4) {
    movie.tag = "Bad";
  }
  return movie;
});
console.log(arrayWithExtraKyeTag);

//5. Using chaining
const higherRatedMovies = movies
  .filter((movie) => movie.rating > 6) //to first filter the movies array to only contain the movies rated higher than 6.
  .map((movie) => movie.rating); //then to map the movies array to only the rating of the movies.
console.log(higherRatedMovies);

//6. Count the total number of movies containing any of
//following keywords: Surfer, Alien or Benjamin.
//So if there were 3 movies that contained Surfer,
//1 with Alien and 2 with Benjamin, you would return 6.
//Can you make sure the search is case insensitive?
const totalNumberOfMovies = movies
  .map((movie) => " " + movie.title.toLowerCase() + " ")
  .reduce((sum, movie) => {
    if (
      movie.includes(" surfer ") ||
      movie.includes(" alien ") ||
      movie.includes(" benjamin ")
    ) {
      sum += 1;
      console.log(movie);
    }
    return sum;
  }, 0);
console.log(totalNumberOfMovies);
//7. Create an array of movies where a word in the title is duplicated
let duplicateWordMovie = [];
const movieTitleArray = movies
  .map((movie) => movie.title.toLowerCase())
  .map((movie) => movie.split(" "));
for (i = 0; i < movieTitleArray.length; i++) {
  //to iterate through every array-element of movies array
  for (j = 0; j < movieTitleArray[i].length; j++) {
    // to iterate through elements of every array-element
    for (k = j + 1; k < movieTitleArray[i].length; k++) {
      // to check for duplicate word
      if (movieTitleArray[i][j] === movieTitleArray[i][k]) {
        duplicateWordMovie.push(movieTitleArray[i].join(" "));
      }
    }
  }
}
console.log(duplicateWordMovie);

//8. Calculate the average rating of all the movies using reduce.

const averageRating =
  [
    movies.reduce((sumOfRating, movie) => {
      sumOfRating += movie.rating;
      return sumOfRating;
    }, 0),
  ] / movies.length;
console.log("Avarage rating of all the movies is " + averageRating);

//9. Count the total number of Good, Average and Bad movies using reduce
let reviewedMovies = {};
const goodReviewedmovies = movies.reduce((sum, movie) => {
  if (movie.rating >= 7) {
    sum += 1;
  }
  return sum;
}, 0);
const averageReviewedmovies = movies.reduce((sum, movie) => {
  if (movie.rating >= 4 && movie.rating < 7) {
    sum += 1;
  }
  return sum;
}, 0);
const badReviewedmovies = movies.reduce((sum, movie) => {
  if (movie.rating < 4) {
    sum += 1;
  }
  return sum;
}, 0);
reviewedMovies.goodmovies = goodReviewedmovies;
reviewedMovies.averagemovies = averageReviewedmovies;
reviewedMovies.badmovies = badReviewedmovies;
console.log(reviewedMovies);
