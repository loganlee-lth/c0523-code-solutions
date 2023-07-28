type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ handleChange }: InputProps): JSX.Element {
  return <input type="text" placeholder="search" onChange={handleChange} />;
}
