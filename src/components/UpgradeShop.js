export default function UpgradeShop({ meat, setMeat, setPerClick, setAutoMeat }) {
  const upgrades = [
    { name: "Sharpen Claws", cost: 20, effect: () => setPerClick((p) => p + 1) },
    { name: "Hunt Rabbits", cost: 50, effect: () => setAutoMeat((a) => a + 1) },
    { name: "Hunt Deer", cost: 200, effect: () => setAutoMeat((a) => a + 5) },
    { name: "Wolf Pack", cost: 500, effect: () => setAutoMeat((a) => a + 20) },
  ];

  const buyUpgrade = (upgrade) => {
    if (meat >= upgrade.cost) {
      setMeat(meat - upgrade.cost);
      upgrade.effect();
    }
  };

  return (
    <div className="upgrade-shop">
      <h3>🛒 Upgrade Shop</h3>
      {upgrades.map((u, index) => (
        <button key={index} onClick={() => buyUpgrade(u)} disabled={meat < u.cost}>
          {u.name} - Cost: {u.cost} 🥩
        </button>
      ))}
    </div>
  );
}