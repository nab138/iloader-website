// Copyright (C) 2026 nab138
// Licensed under the GNU AGPLv3. See LICENSE for details.

import Downloads from "./Downloads";
import About from "./About";

export default function App() {
  return (
    <div className="workspace">
      <section className="workspace-section">
        <div className="section-header">
          <p className="section-label">About</p>
          <span className="section-hint">Info about iloader</span>
        </div>
        <About />
      </section>

      <section className="workspace-section">
        <div className="section-header">
          <p className="section-label">Download</p>
          <span className="section-hint">Choose a build</span>
        </div>
        <Downloads />
      </section>

      <section className="workspace-section">
        <div className="section-header">
          <p className="section-label">Credits</p>
          <span className="section-hint">Contributors and more</span>
        </div>
        <div className="glass-card">
          <h2>Contributors</h2>
          <div className="contributors favor-first-two">
            <div className="card">
              <a href="https://nabdev.me" target="_blank">
                nab138
              </a>
              <span className="subtitle">Creator & Maintainer</span>
            </div>
            <div className="card">
              <a href="https://github.com/StephenDev0" target="_blank">
                StephenDev0
              </a>
              <span className="subtitle">UI Overhaul</span>
            </div>
            <div className="card">
              <a href="https://github.com/se2crid" target="_blank">
                se2crid
              </a>
              <span className="subtitle">Contributor</span>
            </div>
            <div className="card">
              <a href="https://github.com/CelloSerenity" target="_blank">
                CelloSerenity
              </a>
              <span className="subtitle">Contributor</span>
            </div>
            <div className="card">
              <a href="https://github.com/jkcoxson" target="_blank">
                jkcoxson
              </a>
              <span className="subtitle">Contributor</span>
            </div>
            <div className="card">
              <a href="https://github.com/hugeBlack" target="_blank">
                hugeBlack
              </a>
              <span className="subtitle">Contributor</span>
            </div>
          </div>
          <h2>Special Thanks</h2>
          <div className="contributors favor-first-three">
            <div className="card">
              <a href="https://github.com/transistor-exe" target="_blank">
                Transistor
              </a>
              <span className="subtitle">Icon Designer</span>
            </div>
            <div className="card">
              <a href="https://github.com/jkcoxson/idevice" target="_blank">
                idevice by jkcoxson
              </a>
              <span className="subtitle">Device Communication Library</span>
            </div>
            <div className="card">
              <a href="https://github.com/nab138/isideload" target="_blank">
                isideload by nab138
              </a>
              <span className="subtitle">Sideloading Library</span>
            </div>
            <div className="card">
              <a href="https://github.com/khcrysalis/Impactor" target="_blank">
                Impactor by khcrysalis
              </a>
              <span className="subtitle">Reference Code</span>
            </div>
            <div className="card">
              <a href="https://github.com/Dadoum/Sideloader" target="_blank">
                Sideloader by Dadoum
              </a>
              <span className="subtitle">Reference Code</span>
            </div>
            <div className="card">
              <a
                href="https://github.com/jkcoxson/idevice_pair"
                target="_blank"
              >
                idevice_pair by jkcoxson
              </a>
              <span className="subtitle">Reference Code</span>
            </div>
            <div className="card">
              <a href="https://tauri.app" target="_blank">
                Tauri
              </a>
              <span className="subtitle">App Framework</span>
            </div>
          </div>
          <h2>Translators</h2>
          <div className="contributors">
            <div className="card">
              <a href="https://github.com/TNT-333" target="_blank">
                TNT-333
              </a>
              <span className="subtitle">German (de)</span>
            </div>
            <div className="card">
              <a href="https://github.com/basketshoe" target="_blank">
                basketshoe
              </a>
              <span className="subtitle">Italian (it)</span>
            </div>
            <div className="card">
              <a href="https://github.com/baocreata" target="_blank">
                baocreata
              </a>
              <span className="subtitle">Vietnamese (vi)</span>
            </div>
            <div className="card">
              <a href="https://github.com/IamArayel" target="_blank">
                IamArayel
              </a>
              <span className="subtitle">French (fr)</span>
            </div>
          </div>
          <p className="subtitle">
            You can contribute translations{" "}
            <a
              href="https://github.com/nab138/iloader?tab=readme-ov-file#translating"
              target="_blank"
            >
              here.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
