let count = 0;
let pOutput = document.getElementById("output-paragrapgh");
let authorName = document.getElementById("author-name");
let quotes = [
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "-- Mark Twain"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "-- Mahatma Gandhi"
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "-- Bill Keane"
    },
    {
        quote: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
        author: "-- Eleanor Roosevelt"
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "-- J.K. Rowling"
    }
];
// quotes.forEach(e=>{let arr= [e.quote,e.author];console.log(arr)}); // ["If you tell the truth, you don't have to remember anything.", '-- Mark Twain']

let backgroundImages = [
    'url(../imgs/bg1.jpg)',
    'url(../imgs/bg2.jpg)',
    'url(../imgs/bg3.jpg)',
    'url(../imgs/bg4.jpg)',
    'url(../imgs/bg5.jpg)'
];
// Index to keep track of the current background image
let currentImageIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = backgroundImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Cycle through the images
}

// Swap if there is repeated element as there is a repeated random number
function swap(quotesArr){
    for(let i = quotesArr.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [quotesArr[i], quotesArr[j]] = [quotesArr[j], quotesArr[i]]; // [qutoes.quote,qutoes.author] as first element at the quotesAr which is [ {quote:'' , author: ''} ]
    }
}
swap(quotes);

document.querySelector("button").addEventListener("click" , ()=>{
    count++;
    if(count <= quotes.length){
        let currQuote = quotes[count - 1]; // [ {quote:'' , author: ''} ]
        pOutput.innerHTML = `"${currQuote.quote}"`;
        authorName.innerHTML = currQuote.author;
        changeBackgroundImage() ;
    }
    else{
        count = 0; // reset count
    }
});









// ===============================================================
// Same Function But without ensure that the randomly selected quote doesn't repeat until all quotes have been displayed once

// document.querySelector("button").addEventListener("click",(event) => {
//     count++; // To Count Number Of Times For Click 

//     if(count > 0 && count <= 5){
//         let randomNum = Math.floor(Math.random() * count) ; // will be {0|1|2|3|4} only
//         if(randomNum === 0){
//             pOutput.innerHTML = `"If you tell the truth, you don't have to remember anything."`;
//             authorName.innerHTML = "-- Mark Twain";
//         }
//         else if(randomNum === 1){
//             pOutput.innerHTML = `"Live as if you were to die tomorrow. Learn as if you were to live forever."`;
//             authorName.innerHTML = "-- Mahatma Gandhi";
//         }
//         else if(randomNum === 2){
//             pOutput.innerHTML = `"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."`;
//             authorName.innerHTML = "-- Bill Keane";
//         }
//         else if(randomNum === 3){
//             pOutput.innerHTML = `"A woman is like a tea bag; you never know how strong it is until it's in hot water."`;
//             authorName.innerHTML = "-- Eleanor Roosevelt";
//         }
//         else if(randomNum === 4){
//             pOutput.innerHTML = `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`;
//             authorName.innerHTML = "-- J.K. Rowling";
//         }
//         // console.log(`${count} => ${Math.floor(Math.random() * count)}`);
//     }
//     else if(count > 5){
//         count = 0; // reset count
//         // console.log("reset count");
//     }
// });