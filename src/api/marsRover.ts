import { apiKey } from '../constants/variables';

export default async function marsRoverData(sol: string, rover: string, cam: string) {
  let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`;
  if(cam !== 'all') {
    apiUrl += `&camera=${cam}`;
  }
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch(e) {
    throw e;
  }
}
