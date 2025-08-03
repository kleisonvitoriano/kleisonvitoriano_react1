import FaultyTerminal from "./lib/components/Backgrounds/FaultyTerminal/FaultyTerminal";
import ASCIIText from "./lib/components/TextAnimations/ASCIIText/ASCIIText";
import ProfileCard from "./lib/components/Components/ProfileCard/ProfileCard";
import DecryptedText from "./lib/components/TextAnimations/DecryptedText/DecryptedText";
import ScrollFloat from "./lib/components/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollReveal from "./lib/components/TextAnimations/ScrollReveal/ScrollReveal";
import TargetCursor from "./lib/components/Animations/TargetCursor/TargetCursor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <header>
          <div className="logo cursor-target">Kleison Vitoriano</div>
          <nav>
            <ul>
              <li>
                <a className="cursor-target" href="#sobre ">
                  Sobre
                </a>
              </li>
              <li>
                <a className="cursor-target" href="#projetos ">
                  Projetos
                </a>
              </li>
              <li>
                <a className="cursor-target" href="#contato ">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div style={{ width: "100%", height: "730px", position: "relative" }}>
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#00FF7F"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          />
        </div>
        <div className="main-container">
          <div className="left-content">
            <div className="text-ascii-container cursor-target">
              <ASCIIText
                text="Bem Vindo"
                enableWaves={true}
                asciiFontSize={8}
              />
            </div>
            {/* Example 3: Animate on view (runs once) */}
            <div style={{ textAlign:"justify" ,fontSize: "30px", marginTop: "4rem", marginLeft: "4rem" }}>
              <DecryptedText
                text="Desenvolvedor Front-end em busca da primeira oportunidade
            profissional"
                animateOn="view"
                revealDirection="center"
              />
            </div>
          </div>
          <div className="Card-container">
            <ProfileCard
              className="matrix-theme cursor-target"
              name="Kleison V. Silva"
              title="Frontend Developer"
              handle="kleison_vitoriano"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/imagens/CardProfileFoto.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
        <div id="sobre" className="sobreMim-container">
          <div>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Sobre mim
            </ScrollFloat>
            <ScrollReveal
              baseOpacity={0.6}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Sou estudante de Tecnologiada Informação, com formação técnica em
              Informática. Apaixonado por desenvolvimento front-end, busco minha
              primeira oportunidade profissional para aplicar e expandir meus
              conhecimentos.
            </ScrollReveal>
          </div>
          <div className="buttons-sobreMim">
            <a
              href="https://github.com/kleisonvitoriano"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social-item cursor-target"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kleison-vitoriano-da-silva-670852298"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social-item cursor-target"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
