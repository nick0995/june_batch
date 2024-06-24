export default function TabButton({ children, onSelect }) {
  console.log(" TAB BUTTON COMPONENT");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
