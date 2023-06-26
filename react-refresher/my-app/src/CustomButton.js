export default function CustomButton({ onCustomClick, children }) {
  return (
    <button onClick={onCustomClick}>
      {children}
    </button>
  );
}
