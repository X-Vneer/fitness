export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
async function getData(res) {
  if (!res.ok) {
    throw Error("sorry, we Could not fetch your Exercises");
  } else {
    return res.json();
  }
}
export const fetchData = async function (url, options) {
  try {
    const response = await fetch(url, options);
    const data = await getData(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};
