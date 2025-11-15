function fakeStocksAPI(){
    return{
        name: "Tektons",
        symb: "TKS",
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}

export {fakeStocksAPI}