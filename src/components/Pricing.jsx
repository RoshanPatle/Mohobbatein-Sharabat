import smallGlass from '../assets/small-glass.png'
import fullGlass from '../assets/full-glass1.png'


export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Our Price</h2>
      <div className="prices">
        <div className="price-card">
          <img src={smallGlass} alt="" />
          <h3>Regular</h3>
          <p>₹ 40 / Glass</p>
        </div>
        <div className="price-card">
          <img src={fullGlass} alt="" />
          <h3>Large</h3>
          <p>₹ 60 / Glass</p>
        </div>
      </div>
    </section>
  );
}