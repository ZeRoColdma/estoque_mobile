export default interface DropdownProps {
  label: string;
  items: Array<{ label: string; value: any }>;
  onValueChange: (value: any) => void;
}