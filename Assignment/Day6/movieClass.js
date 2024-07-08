class Movie {
    constructor(title,studio,rating = 'PG'){
        this.rating = rating
        this.title =title
        this.studio=studio
    }
    
    static getPG(movies){
      
        return movies.filter(movie => movie.rating === "PG")
    }
}
const casinoRoyale = new Movie('Casino Royale','EON Productins','PG-13')
console.log(casinoRoyale);

const movies = [
    new Movie('James','Bond','PG13'),
    new Movie('James1','Bond1'),
    new Movie('James2','Bond2','PG')
];

console.log(movies);
const pgMovie=Movie.getPG(movies)
console.log(pgMovie);
