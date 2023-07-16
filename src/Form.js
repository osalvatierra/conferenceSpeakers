export function Form({ quantity, setQuantity }) {
  return (
    <form className="profileNum">
      <h3>How many more speakers profiles would you like to view?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </form>
  );
}
