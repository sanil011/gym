export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0dbee03fcdmsh6f48b350984530ep1bbb64jsnbe01a4f5c863',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f9d2b7849amsh59ab96aaf4748b4p1f4facjsnf9a01b990b57',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}