import iRoverCams from './interfaces/iRoverCams';

const apiKey: string = 'yrCABfb0DcCjTRlb7Ckh4fdiSmFplpVg49VDcuLh';

// Rover cams as documented in the API docs.
const roverCams: iRoverCams = {
  curiosity: ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'],
  opportunity: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
  spirit: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
}

export {
  apiKey,
  roverCams,
}