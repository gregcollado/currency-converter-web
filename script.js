

async function getData() {
    
    const url = process.env.url;

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
        }else{
            console.error("Error fetching exchange rates.");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();