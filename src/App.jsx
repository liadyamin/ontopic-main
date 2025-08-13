import './App.css'

function App() {
  return (
    <div className="app">
      <section className="hero">
        <h1>OnTopic Health</h1>
        <p className="tagline">Know Your Light</p>
        <p className="subtitle">Clarity in exposure. Balance in life.</p>
      </section>

      <section className="mission">
        <h2>Reimagining Health Through Light</h2>
        <p>We're developing technology that makes the invisible visible—revealing how light shapes every aspect of your wellbeing.</p>
      </section>

      <section className="product">
        <h2>Introducing Glow</h2>
        <p>The first wearable designed specifically to quantify and optimize your light exposure.</p>
        <a href="https://preorder.ontopic.health" className="cta-button">Pre-order Now</a>
      </section>

      <footer className="footer">
        <p>&copy; 2024 OnTopic Health</p>
        <p>hello@ontopic.health</p>
      </footer>
    </div>
  )
}

export default App