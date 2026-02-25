import heropng from '../assets/logo.png'


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="mohabbat">Mohabbatein Sharbat</h1>
        <p>Sweet. Chilled. Full of love 💕</p>
        <p className="shayari"><span>गर्मी में राहत, सर्दी में चाहत,</span>
<span>हर मौसम की पहली राहत।</span>
<span>जहाँ स्वाद मिले भरोसे के साथ,</span>
वहीं बिकता है मोहब्बत का शरबत।</p>
      </div>
      <img src={heropng} alt="Refreshing Sharbat" />
    </section>
  );
}