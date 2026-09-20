
let eur = document.querySelector('.EUR');
let usd = document.querySelector('.USD');
let myCurrencys = {
    USD: 1,
    DOP: parseFloat(usd),
    EUR: parseFloat(eur),
};

async function getData() {
    
    const url = 'https://v6.exchangerate-api.com/v6/1d6b657b7fb0028a1878ec06/latest/USD';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        
        if (data.result === "success") {
            myCurrencys = {
                USD: 1,
                DOP: data.conversion_rates.DOP,
                EUR: data.conversion_rates.EUR,
            };
            console.log("Connection successful. Exchange rates:", myCurrencys);
            return myCurrencys;
        }else{
            console.error("Error fetching exchange rates.");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

myCurrencys = await getData();
usd.textContent = myCurrencys.DOP.toFixed(2) + " DOP";
eur.textContent = (myCurrencys.DOP / myCurrencys.EUR).toFixed(2) + " DOP";
// console.log("Exchange rates:", myCurrencys);

