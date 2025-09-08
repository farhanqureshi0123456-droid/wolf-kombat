export default function TapButton({ meat, setMeat, perClick }) {
  return (
    <div className="tap-area">
      <img
        src="/wolf.png"
        alt="Wolf"
        className="tap-button"
        onClick={() => setMeat(meat + perClick)}
      />
      <p>Tap the Wolf to Collect Meat!</p>
    </div>
  );
}