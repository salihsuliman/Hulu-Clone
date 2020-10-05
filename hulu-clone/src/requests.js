const API_KEY = '0b442244c2fd66b85dc89ff05dea8d7f'

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US` , 
    fetchTopRated: `/movie/all/top_rated?api_key=${API_KEY}&language=en-US` , 
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/tv?api_key=${API_KEY}&with_networks=878`,
    fetchWestern: `/discover/tv?api_key=${API_KEY}&with_networks=37`,
    fetchAnimation: `/discover/tv?api_key=${API_KEY}&with_networks=16`,
    fetchTV: `/discover/tv?api_key=${API_KEY}&with_networks=10770`,
};