export default interface ButtonProps {
  children: string,
  func: (...args: any) => any,
  value: string | Array<string>,
}