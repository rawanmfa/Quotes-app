var quotes=[
    {
        quote:'"You miss 100% of the shots you do not take."',
        author:'--Wayne Gretzy'
    },
    {
        quote:'"It is not what happens to you, but how you react to it that matters."',
        author:'--Epictetus'
    },
    {
        quote:'"Do not take life too seriously. You will not get out alive."',
        author:'--Elbert Hubbard'
    },
    {
        quote:'"The best revenge is massive success."',
        author:'--Frank Sinatra'
    },
    {
        quote:'"Resentment is like drinking poison and waiting for your enemies to die."',
        author:'--Nelson Mandela'
    }
]
var last_random = 0;
var random;

function setQuote(){
   random = Math.floor(Math.random() * quotes.length);

   if(random != last_random){
      last_random = random;
      document.getElementById("quote").innerHTML = quotes[random].quote;
      document.getElementById("author").innerHTML = quotes[random].author;
   }else{
     setQuote();
   }
   console.log(random);
}
