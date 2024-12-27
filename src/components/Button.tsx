import '../styles/Button.css'

interface ButtonProps {
    text: string;  // Define a prop for button text
    textStyle?: string;
  }
  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Button({ text, textStyle }: ButtonProps) {
    return <button className="button">{text}</button>;
}

export default Button;