export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Our Price</h2>
      <div className="prices">
        <div className="price-card">
          <img src="./src/assets/small-glass.png" alt="" />
          <h3>Regular</h3>
          <p>₹ 40 / Glass</p>
        </div>
        <div className="price-card">
          <img src="./src/assets/full-glass1.png" alt="" />
          <h3>Large</h3>
          <p>₹ 60 / Glass</p>
        </div>
      </div>
    </section>
  );
}