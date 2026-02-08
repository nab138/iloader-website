import logo from "/iloader.svg";
import "./App.css";

const base_url = "https://github.com/nab138/iloader/releases/latest/download/";

function App() {
  return (
    <main className="app">
      <div className="title-block">
        <img src={logo} alt="iloader logo" className="logo" />
        <div>
          <h1 className="title">iloader</h1>
          <p className="subtitle">iOS Sideloading Companion</p>
        </div>
      </div>

      <div className="workspace">
        <section className="workspace-section">
          <div className="section-header">
            <p className="section-label">About</p>
            <span className="section-hint">Info about iloader</span>
          </div>
          <div className="glass-card">
            <h2>About iloader</h2>
            <p>
              iloader is a free and open source user-friendly sideloader
              designed to make installing SideStore (or other apps) on an
              iDevice as easy as possible.
            </p>
            <div>
              <h3>Features</h3>
              <ul>
                <li>Supports Windows, Linux, and MacOS</li>
                <li>Automatically installs and helps setup SideStore</li>
                <li>Install any .ipa application</li>
                <li>
                  Manage pairing files for apps like StikDebug or Protokolle
                </li>
                <li>See and manage development certificates and app ids</li>
                <li>Open Source & MIT Licensed</li>
              </ul>
            </div>
            <div className="buttons">
              <a
                className="button"
                href="https://github.com/nab138/iloader"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button"
                href="https://docs.sidestore.io/docs/installation/prerequisites"
                target="_blank"
              >
                SideStore Guide
              </a>
              <a
                className="button"
                href="https://github.com/nab138/iloader-website"
                target="_blank"
              >
                Website Source
              </a>
            </div>
          </div>
        </section>

        <section className="workspace-section">
          <div className="section-header">
            <p className="section-label">Download</p>
            <span className="section-hint">Choose a build</span>
          </div>
          <div className="glass-card">
            <h2>Download iloader</h2>
            <p>
              Here and{" "}
              <a
                style={{ color: "inherit" }}
                href="https://github.com/nab138/iloader"
              >
                the GitHub repository
              </a>{" "}
              are the only places iloader is officially distributed. Do not
              download iloader from any other sources.
            </p>
            <div className="downloads">
              <div className="card">
                <h3>Windows</h3>
                <a
                  className="button primary"
                  href={`${base_url}iloader-windows-x64.msi`}
                >
                  MSI Installer
                </a>
                <a
                  className="button"
                  href={`${base_url}iloader-windows-x64.exe`}
                >
                  EXE Installer
                </a>
              </div>
              <div className="card">
                <h3>Linux</h3>
                <a
                  className="button primary"
                  href={`${base_url}iloader-linux-amd64.deb`}
                >
                  Ubuntu/Debian (.deb)
                </a>
                <a
                  className="button"
                  href={`${base_url}iloader-linux-x86_64.rpm`}
                >
                  Fedora/RedHat (.rpm)
                </a>
                <a
                  className="button"
                  href={`${base_url}iloader-linux-amd64.AppImage`}
                >
                  AppImage
                </a>
              </div>
              <div className="card">
                <h3>MacOS</h3>
                <a
                  className="button primary"
                  href={`${base_url}iloader-darwin-universal.dmg`}
                >
                  DMG Installer
                </a>
                <a
                  className="button"
                  href={`${base_url}iloader-darwin-universal.app.tar.gz`}
                >
                  App Bundle (tar.gz)
                </a>
              </div>
            </div>
          </div>
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
            <div className="contributors">
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
                <span className="subtitle">Sideloading library</span>
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
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>Official Site | Maintained by nab138</p>
      </footer>
    </main>
  );
}

export default App;
