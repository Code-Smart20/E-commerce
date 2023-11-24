// getting the cartContainer from the Html
let cartElement = document.getElementById("product__container");

// shop items Datas
let shopData = [
    {
        id: "A",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "B",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "C",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "D",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "E",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "F",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "G",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
    {
        id: "H",
        img: "https://media.istockphoto.com/id/1453345677/photo/closeup-of-businessperson-in-wristwatch-businessperson-wearing-wristwatch-photo-of.webp?b=1&s=170667a&w=0&k=20&c=aqITAIOuzKedPY9LZo6LHN0ut2nfcjHX8vYJoavBXwQ=",
        title: "Mens Shirt",
        desc: "helloooooo",
        price: 55
    },
]

let basket = [];

// Generating items dynamically using js map function
cartElement.innerHTML = shopData.map((x) => {
    let { id, img, title, desc, price } = x

    return (` <div class="product__cart" id =product-id-${id}>

                    <div class="product__img">
                        <img src=${img} alt="">
                    </div>
                    
                    <h3 class="product__name">${title}</h3>
                    <p class="product__desc">${desc}</p>
                    

                    <div class="product__priceQty">
                        <h5>$ ${price}</h5>

                        <div class="product__buttons">
                            <i class="bi bi-dash" onclick="decrement(${id})"></i>
                            <div id = ${id} class="product__quantity">0</div>
                            <i class="bi bi-plus" onclick="increment(${id})"></i>
                        </div>
                        
                    </div>
                    
               </div>
`
    )
}).join("");


// increment function
const increment = (id) => {
  
    let selecteditem = id;

    let search = basket.find((x) => 
        x.id === selecteditem.id
        );

    if(search === undefined) {
        basket.push({
            id: selecteditem.id,
            qty: 1
        });
    } else {
        search.qty++;
        
    }


    update(selecteditem.id);

}

// decrement function
const decrement = (id) => {

   let selecteditem = id;

    let search = basket.find((x) => 
        x.id === selecteditem.id
        );

    if (search.qty === 0) return; 
     else {
        search.qty--; 
    }

    update(selecteditem.id)
}

// update function
const update = (id) => {

    let search = basket.find((x) => x.id === id);

    console.log(search.qty);

    document.getElementById(id).innerHTML = search.qty;

    calculation()

}


let calculation = () => {
    let cartIcon = document.getElementById("cart__amount");

    cartIcon.innerHTML = basket.map((x) => x.qty).reduce((x, y) => x + y);     
}
