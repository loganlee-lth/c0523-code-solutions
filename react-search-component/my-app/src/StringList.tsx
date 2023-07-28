type Props = {
  list: string[];
  searchTerm: string;
};

export function StringList({ list, searchTerm }: Props): JSX.Element {
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredList.length === 0) {
    return <p>No items match the filter.</p>;
  }

  return (
    <ul>
      {filteredList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
