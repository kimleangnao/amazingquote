let jsButtonLeft = document.querySelector(".js--button--left");
let jsButtonRight = document.querySelector(".js--button--right");

let boxOne = document.querySelector(".js--1");
let boxTwo = document.querySelector(".js--2");
let boxThree = document.querySelector(".js--3");

let boxOneDetail = document.querySelector(".js--detail--1");
let boxTwoDetail = document.querySelector(".js--detail--2");
let boxThreeDetail = document.querySelector(".js--detail--3");

let canClick = true;

let arrayOfQuote = [{name: "Alan Watts", image:"./images/Alan_Watts.png", quote:"Better to have a short life that is full of what you life doing than a long life spent in a miserable way."},
                    {name: "Mahatma Gandhi", image:"./images/mahatma.jpg", quote:"Live as if you were to die tomorrow. Learn as if you were to live forever."},
                    {name: "Pablo Picasso", image:"./images/pablo-picasso.jpg", quote:"Everything you can imagine is real."},
                    {name: "Paulo Coelho, The Alchemist", image:"./images/paulo-coelho.jpg", quote:"And, when you want something, all the universe conspires in helping you to achieve it."},
                    {name: "Paulo Coelho, The Witch of Portobello", image:"./images/paulo-coelho.jpg", quote:"You are what you believe yourself to be"},
                    {name: "Theodore Roosevelt", image:"./images/President_Roosevelt.jpg", quote:"Do what you can, with what you have, where you are."}
                ];
//start from 0
let trackNumber = 0;

jsButtonLeft.addEventListener("click", function(e){
    e.preventDefault();

    // length = 6 - 1 = 5
    if(trackNumber == 0){
        trackNumber = arrayOfQuote.length - 1;
    }else{
        trackNumber -= 1;
    }

    if(canClick){
        canClick = false;
        boxThree.style.marginLeft = "100%";

        boxOneDetail.style.backgroundColor = "rgb(230, 230, 230)";
        boxOne.style.marginLeft = "0%";

        setTimeout(function(){
            boxThree.style.opacity = "0";
        }, 300)
    
        setTimeout(function(){
            boxThreeDetail.textContent = "";
            boxThree.style.marginLeft = "0%";

            let imageWrapper = document.createElement("div");
            imageWrapper.setAttribute("class", "quote--image--wrapper");

            let imageWrapperImg = document.createElement("img");
            imageWrapperImg.setAttribute("class", "quote--image--wrapper--img");
            //img to be replace
            imageWrapperImg.setAttribute("src", arrayOfQuote[trackNumber].image)
            //to be replace with author name
            imageWrapperImg.setAttribute("alt", "flower")

            imageWrapper.appendChild(imageWrapperImg);

            let quoteWrapper = document.createElement("div");
            quoteWrapper.setAttribute("class", "quote--text--wrapper");

            let quoteText = document.createElement("div");
            quoteText.setAttribute("class", "quote--text--name");

            quoteText.textContent = arrayOfQuote[trackNumber].name;

            let quoteSpanOpen = document.createElement("span");
            quoteSpanOpen.setAttribute("class", "quote--sign--open");

            let quoteSpanOpenI = document.createElement("i");
            quoteSpanOpenI.setAttribute("class", "fas fa-quote-left");

            quoteSpanOpen.appendChild(quoteSpanOpenI);

            let p = document.createElement("p");
            p.textContent = arrayOfQuote[trackNumber].quote;

            let quoteSpanClose = document.createElement("span");
            quoteSpanClose.setAttribute("class", "quote--sign--close");

            let quoteSpanCloseI = document.createElement("i");
            quoteSpanCloseI.setAttribute("class", "fas fa-quote-right");

            quoteSpanClose.appendChild(quoteSpanCloseI);

            quoteWrapper.appendChild(quoteText);
            quoteWrapper.appendChild(quoteSpanOpen);
            quoteWrapper.appendChild(p);
            quoteWrapper.appendChild(quoteSpanClose);

            boxThreeDetail.appendChild(imageWrapper);
            boxThreeDetail.appendChild(quoteWrapper);

        }, 600)
    
        setTimeout(function(){
            boxThree.style.opacity = "1";
        }, 700)
        setTimeout(function(){
            boxOneDetail.style.backgroundColor = "white";
            boxOne.style.marginLeft = "-100%";
            canClick = true;
        }, 1000)
    }

});
jsButtonRight.addEventListener("click", function(e){
    e.preventDefault();

    if(trackNumber  == arrayOfQuote.length - 1){
        trackNumber = 0;
    }else{
        trackNumber += 1;
    }

    if(canClick){
        canClick = false;
        boxThree.style.marginLeft = "-100%";

        boxTwoDetail.style.backgroundColor =  "rgb(230, 230, 230)";
        boxTwo.style.marginLeft = "0%";
    
        setTimeout(function(){
            boxThree.style.opacity = "0";
        }, 300)
    
        setTimeout(function(){
            boxThreeDetail.textContent = "";
            boxThree.style.marginLeft = "0%";

            let imageWrapper = document.createElement("div");
            imageWrapper.setAttribute("class", "quote--image--wrapper");

            let imageWrapperImg = document.createElement("img");
            imageWrapperImg.setAttribute("class", "quote--image--wrapper--img");
            //img to be replace
            imageWrapperImg.setAttribute("src", arrayOfQuote[trackNumber].image)
            //to be replace with author name
            imageWrapperImg.setAttribute("alt", "flower")

            imageWrapper.appendChild(imageWrapperImg);

            let quoteWrapper = document.createElement("div");
            quoteWrapper.setAttribute("class", "quote--text--wrapper");

            let quoteText = document.createElement("div");
            quoteText.setAttribute("class", "quote--text--name");

            quoteText.textContent = arrayOfQuote[trackNumber].name;

            let quoteSpanOpen = document.createElement("span");
            quoteSpanOpen.setAttribute("class", "quote--sign--open");

            let quoteSpanOpenI = document.createElement("i");
            quoteSpanOpenI.setAttribute("class", "fas fa-quote-left");

            quoteSpanOpen.appendChild(quoteSpanOpenI);

            let p = document.createElement("p");
            p.textContent = arrayOfQuote[trackNumber].quote;

            let quoteSpanClose = document.createElement("span");
            quoteSpanClose.setAttribute("class", "quote--sign--close");

            let quoteSpanCloseI = document.createElement("i");
            quoteSpanCloseI.setAttribute("class", "fas fa-quote-right");

            quoteSpanClose.appendChild(quoteSpanCloseI);

            quoteWrapper.appendChild(quoteText);
            quoteWrapper.appendChild(quoteSpanOpen);
            quoteWrapper.appendChild(p);
            quoteWrapper.appendChild(quoteSpanClose);

            boxThreeDetail.appendChild(imageWrapper);
            boxThreeDetail.appendChild(quoteWrapper);

        }, 600)
    
        setTimeout(function(){
            boxThree.style.opacity = "1";
        }, 700)
        setTimeout(function(){
            boxTwoDetail.style.backgroundColor = "white";
            boxTwo.style.marginLeft = "100%";
            canClick = true;
        }, 1000)
    }
 
});
