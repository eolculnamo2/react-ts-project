export default interface ButtonProps {
  children: string,
  func: (...args: any) => any,
  type?: string,
  value: string | Array<string>,
}