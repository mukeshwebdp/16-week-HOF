let item = [{
    name: 'iphone 15 pro',
    category: 'Mobile',
    priceUSD: 999,
},
{
    name: 'Macbook Air',
    category: 'Laptop',
    priceUSD: 1499,
},
{
    name: 'Apple Whatch',
    category: 'Whatch',
    priceUSD: 499,
},
{
    name: 'Sumsang',
    category: 'Mobile',
    priceUSD: 499,
}]

const exchangeRateINR = 80;

    function convertToINR (priceUSD){
        return priceUSD*exchangeRateINR;
    }

    let addINRPrice = item.map((items)=>
                                    {return{...items,
                            priceINR: convertToINR(items.priceUSD)}})

        console.log(addINRPrice)