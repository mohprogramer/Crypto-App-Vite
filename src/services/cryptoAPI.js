 const BASE_URL = "https://api.coingecko.com/api/v3"
 const API_KEY = "CG-J3PNt2dp6z2yF8dQp8zfsSRn"
 
 const getCryptoList = (page,currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
}

export {getCryptoList}