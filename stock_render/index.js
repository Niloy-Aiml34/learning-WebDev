import { getStockData } from './fakeStockApi.js'; // use relative path

setInterval(function() {
  const stockData = getStockData();
  renderStockChart(stockData);
}, 1000);

let previousPrice = null;

function renderStockChart(stockData) {
  const stockDisplayName = document.getElementById('name');
  const stockDisplaySymbol = document.getElementById('symbol');
  const stockDisplayPrice = document.getElementById('price');
  const stockDisplayPriceIcon = document.getElementById('price-icon');
  const stockDisplayTime = document.getElementById('time');

  stockDisplayName.innerText = stockData.name;
  stockDisplaySymbol.innerText = stockData.sym;
  stockDisplayPrice.innerText = stockData.price + " ";
  stockDisplayTime.innerText = stockData.time;
  const price = parseFloat(stockData.price);

  const priceicon = price > previousPrice ? 'up_arrow.png' : price < previousPrice ? 'down_arrow.png' : 'nuetral_arrow.png';
  const priceiconElement = document.createElement('img');
  priceiconElement.src = `svg/${priceicon}`;
  priceiconElement.alt = priceicon;
  priceiconElement.style.height = "1em";
  priceiconElement.style.width = "auto";
  priceiconElement.style.verticalAlign = "middle";

  stockDisplayPriceIcon.innerHTML = '';
  stockDisplayPriceIcon.appendChild(priceiconElement);

  previousPrice = price;

}
