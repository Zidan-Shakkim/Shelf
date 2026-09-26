const API_Key = "6f4fbbd9819443cfb09d86915cf9c072";
const API = `https://api.rawg.io/api/games?key=${API_Key}&skip=0`;

export async function getGames(){
    try{
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("Couldn't Fetch Resource")
        }

        const data = await response.json();
        return data.results
    }
    catch(error){
        console.error(error);
    }
}