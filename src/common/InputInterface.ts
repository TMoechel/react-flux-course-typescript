export interface IInputProps {
  id: string;
  name: string;
  value: string;
  label: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelectOption {
  value: string;
  text: string;
}

export interface ISelectProps {
  id: string;
  name: string;
  value: number;
  label: string;
  options: ISelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface IFormProps<T> {
  data: T;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
