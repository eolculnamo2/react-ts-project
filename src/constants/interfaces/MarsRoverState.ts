export default interface MarsRoverState {
  apiData: Array<any>,
  cam: string,
  rover: string,
  sol: number | null,
  validRover: boolean,
}