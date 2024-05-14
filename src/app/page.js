import "./page.scss";

export default function Home() {
  return (
    <main className='main'>
      <div class="parallax">
        <div class="parallax-image">
          <img src="/planet.png" alt="planet" />
        </div>
        <div className="parallax-content">
          <section className='section'>
            <div className="container">
              <div className="top-buttons">
                <button>Leaderboard</button>
                <button>Buy Spice AI</button>
              </div>
              <h1 className='header'>
                A new economic primitive for funding  decentralized AI
              </h1>
              <p>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
              </p>
              <button>Buy Spice AI</button>
            </div>
          </section>
          <section className='section'>
            <div className="container">
              <div className="statistic-items">
                <div className="item">
                  <div className="value">
                    10,873
                  </div>
                  <span>
                    LLM models
                  </span>
                </div>
                <div className="item">
                  <div className="value">
                    $72,470,728
                  </div>
                  <span>
                    paid to data scientists
                  </span>
                </div>
                <div className="item">
                  <div className="value">
                    $72,470,728
                  </div>
                  <span>
                    paid to data scientists
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className="container">
              <img src="/commet.png" alt="planet" />
              <h2>
                Crowdsourcing our collective intelligence to build the best AI
              </h2>
              <p>
                Open source AIs have been lagging in development behind OpenAI with billions of dollars. We run competitions between AI models to find and pay for the best AI model.  Users will be able to access the best AI models.
              </p>
              <button>Use the cutting edge AI</button>
            </div>
          </section>
        </div>
      </div>
      <section className='section'>
        <div className="container">
          <h1>4</h1>
        </div>
      </section>
      <footer>
        <nav>
          <a href="#">Home</a>
          <a href="#">Leaderboard</a>
          <a href="#">About</a>
        </nav>
        <div>
          <div className="social">
            <a href="#" className='telegram'></a>
            <a href="#" className='twitter'></a>
          </div>
          <div className="policy">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
