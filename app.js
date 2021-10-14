const form = document.querySelector("#inputForm");

form.addEventListener('submit',function(e){
e.preventDefault();
const coinType = document.querySelector("#name").value;
console.log(coinType);
fetchPrice(coinType);

})

const fetchPrice = async(coinType)=>{
    const r = await axios.get(`https://api.cryptonator.com/api/ticker/${coinType}`);
    console.log(r.data.ticker);

    var result = document.querySelector('h3');
    result.innerHTML = `${coinType} currently at ${r.data.ticker.price}`

}