/// <reference types="react-scripts" />

declare module 'jest-mock-random';
declare module 'fontfaceobserver';

interface FloatingLabel {
  children: ReactNode;
}
interface Label extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  children: ReactNode;
  float?: boolean;
}

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  // For matching label with correct input (<label for="..">)
  id: string;
  // Reference the correct input
  name?: string;
  // Track what's in the input
  value?: string;
  // Function to track current input value in state
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  children?: ReactNode;
  float?: boolean;
}
