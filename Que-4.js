const books =[{
    title: 'A Suitable Boy',
    author: 'Vikram Seth',
    year:   1993
},
{
    title: 'India After Gandhi',
    author: 'Ramachandra Gupta',
    year:   2007,
},
{
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    year: 2010,
},
{
    title: "The God of Small Things",
    author: "Arundhati Roy",
    year: 1997,
},
{
    title: "A Suitable Boy",
    author: "Vikram Seth",
    year: 1993,
},
{
    title: "The White Tiger",
    author: "Aravind Adiga",
    year: 2018,
},
{
    title: "Midnight's Children",
    author: "Salman Rushdie",
    year: 1981,
},]

const filterBooks = books.filter((book)=>{
    return book.year >= 2010;
})

const result = filterBooks.map((book)=> {
    return{...book,
    author: book.author.toUpperCase()};
})

console.log(result);
