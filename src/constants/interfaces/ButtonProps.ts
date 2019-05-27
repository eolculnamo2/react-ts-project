export default interface ButtonProps {
  btnClass: string,
  children: string,
  onClick: (...args: any) => any,
  disabled?: boolean,
}