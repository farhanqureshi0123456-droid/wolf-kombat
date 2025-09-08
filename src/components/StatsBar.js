export default function StatsBar({ perClick, autoMeat }) {
  return (
    <div className="stats-bar">
      <p>⚔️ Meat per Click: {perClick}</p>
      <p>⏳ Auto Meat/sec: {autoMeat}</p>
    </div>
  );
}