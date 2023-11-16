// getting the cartContainer from the Html
let cartElement = document.getElementById("product__container");

// shop items Datas
let shopData = [
    {
        id: 1,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 2,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 3,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 4,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 5,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 6,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 7,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: 8,
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
]

let basket = [];

// Generating items dynamically using js map function
cartElement.innerHTML = shopData.map((item,idx) => {
    let { id, img, title, desc, price } = item
    return (` <div class="product__cart" id ="{idx}">

                    <div class="product__img">
                        <img src=${img} alt="">
                    </div>
                    
                    <h3 class="product__name">${title}</h3>
                    <p class="product__desc">${desc}</p>
                    

                    <div class="product__priceQty">
                        <h5>$ ${price}</h5>

                        <div class="product__buttons">
                            <i class="bi bi-dash" onclick="decrement()"></i>
                            <div class="product__quantity">0</div>
                            <i class="bi bi-plus" onclick="increment()"></i>
                        </div>
                        
                    </div>
                    
               </div>
`
    )
}).join("");


// increment function
const increment = (idx) => {
    console.log(idx)
   console.log("increment function is active") 
}

// decrement function
const decrement = () => {
    console.log("decreement function is running")
}

// update function
const update = () => {
   console.log("update functionality just started") 
}


console.log(cartElement);