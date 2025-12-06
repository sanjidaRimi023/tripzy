export interface ReusableBtnProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}