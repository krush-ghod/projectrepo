// import the fuction from the other file
import { fakeStocksAPI } from "./fakeAPI.js";

// set an interval that would call the function every 1.5 secs
setInterval(function() {
    const fakeStockData = fakeStocksAPI()
    displayStockInfo(fakeStockData)
}, 1500);

// defining the display stock info function
function displayStockInfo(fakeStockData){
    const stockName = document.getElementById("stock-name")
    const stockSymbol = document.getElementById("stock-symbol")
    const stockPrice = document.getElementById("stock-price")
    const displayTime = document.getElementById("local-time")
    const {name, symb, price, time} = fakeStockData
    
    stockName.innerText = name
    stockSymbol.innerText = symb
    stockPrice.innerText = price
    displayTime.innerText = time

}