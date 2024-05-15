'use client';
import { useParallax } from "react-scroll-parallax";
import "./page.scss";

export default function Home() {
  
  const parallaxComet = useParallax({
    translateX: [0, 500],
    translateY: [0, 2500],
  });

  const parallaxRocket = useParallax({
    rotate: [0, 30]
  });

  const parallaxStatistic = useParallax({
    translateX: [0, 0],
    translateY: [200, 0],
  });

  return (
    <main className='main'>
      <div class="parallax">
        <div class="parallax-image">
          <img src="/planet.png" alt="planet" />
        </div>
        <div className="parallax-content">
          <div className="comet" ref={parallaxComet.ref}>
            <img src="/comet.png" alt="comet"/>
          </div>
          <section className='section'>
            <div className="container first-screen">
              <div className="top-buttons">
                <span>Leaderboard</span>
                <button>Buy Spice AI</button>
              </div>
              <h1 className='header'>
                A new economic primitive for funding  decentralized AI
              </h1>
              <p>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
              </p>
              <button>Buy Spice AI</button>
              <div className="statistic-items"ref={parallaxStatistic.ref} >
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
              <h2>
                Crowdsourcing our collective intelligence to build the best AI
              </h2>
              <p>
                Open source AIs have been lagging in development behind OpenAI with billions of dollars.
                <br/>
                We run competitions between AI models to find and pay for the best AI model. 
                <br/>
                Users will be able to access the best AI models.
              </p>
              <button>Use the cutting edge AI</button>
            </div>
          </section>
          <section className='section'>
            <div className="container">
              <div className="rocket">
                <img src="/rocket.png" alt="pocket" className='rocket' ref={parallaxRocket.ref}/>
              </div>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
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
          <a href="#" className='telegram'>telegram</a>
          <a href="#" className='twitter'>twitter</a>
        </div>
        <div className="policy">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
    </main>
  )
}