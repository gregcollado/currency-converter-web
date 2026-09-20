// 1. SELECTORES DEL DOM EXACTOS
const eurInDop = document.querySelector('.EUR');
const usdInDop = document.querySelector('.USD');
const usdToEur = document.querySelector('.usdToEur');
const eurToUsd = document.querySelector('.eurToUsd');
const lastUpdate = document.querySelector('.update-line');

// Seleccionamos por separado los dos textos informativos para asegurarnos de actualizar ambos
const footerTextElement = document.querySelector('.footer-text');
const infoCardParagraph = document.querySelector('.info-card p');

let myCurrencys = {
    USD: 1,
    DOP: 58.40, // Valores por defecto basados en tu HTML
    EUR: 0.92
};

// 2. PETICIÓN A LA API
async function getData() {
    const url = 'https://v6.exchangerate-api.com/v6/1d6b657b7fb0028a1878ec06/latest/USD';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.result === "success") {
            return {
                USD: 1,
                DOP: data.conversion_rates.DOP,
                EUR: data.conversion_rates.EUR,
            };
        } else {
            console.error("Error en la API. Usando valores locales.");
        }
    } catch (error) {
        console.error('Error al conectar con la API:', error);
    }
    return null;
}

// 3. ACTUALIZACIÓN DE LA INTERFAZ
async function initCurrencyConverter() {
    // Esperamos los datos reales del servidor
    const apiData = await getData();
    if (apiData) {
        myCurrencys = apiData;
        console.log("Datos obetenidos exitosamente: "+ "\nUSD: " + myCurrencys.USD + "\nDOP: " + myCurrencys.DOP + "\nEUR: " + myCurrencys.EUR);
    }

    // Calculamos los valores cruzados de las monedas
    const eurEnDopPrecio = (myCurrencys.DOP / myCurrencys.EUR);
    const usdToEurPrecio = myCurrencys.EUR;
    const eurToUsdPrecio = (myCurrencys.USD / myCurrencys.EUR);

    // Formateamos la hora actual de manera limpia (Ej: 01:25 PM)
    const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const textoActualizado = "La tasa mostrada es orientativa. Última actualización: hoy, " + horaActual + ".";

    // Modificamos las tasas principales en la vista
    if (usdInDop) usdInDop.textContent = myCurrencys.DOP.toFixed(2) + " DOP";
    if (eurInDop) eurInDop.textContent = eurEnDopPrecio.toFixed(2) + " DOP";
    if (lastUpdate) lastUpdate.textContent = "Última actualización: hoy, " + horaActual;
    
    // Modificamos el panel lateral de conversiones cruzadas
    if (usdToEur) usdToEur.textContent = usdToEurPrecio.toFixed(2) + " EUR";
    if (eurToUsd) eurToUsd.textContent = eurToUsdPrecio.toFixed(2) + " USD";
    
    // SOLUCIÓN AL ERROR: Forzamos la actualización de ambos textos del HTML
    if (footerTextElement) {
        footerTextElement.textContent = textoActualizado;
    }
    if (infoCardParagraph) {
        infoCardParagraph.textContent = textoActualizado;
    }
}

// 4. CONTROL DE INICIALIZACIÓN SECO PARA TRANSMISIÓN DE MÓDULOS
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCurrencyConverter);
} else {
    initCurrencyConverter();
}
