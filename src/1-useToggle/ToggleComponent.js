import useToggle from "./useToggle";

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  // Can affect the DOM, elements, stuff like that form here with true/false

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}