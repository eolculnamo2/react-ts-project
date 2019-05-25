import { apiKey } from '../constants/variables';

export default function marsRoverData(sol: number, rover: string) {
  let fetchResponse: Object | undefined;
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then( res => res.json() )
    .then( data => fetchResponse=data)
    .catch( err => {
      throw err;
    });

  return fetchResponse;
}
