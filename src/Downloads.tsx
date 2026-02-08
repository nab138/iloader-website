const base_url = "https://github.com/nab138/iloader/releases/latest/download/";

export default function Downloads() {
  return (
    <div className="glass-card">
      <h2>Download iloader</h2>
      <p>
        Here and{" "}
        <a href="https://github.com/nab138/iloader">the GitHub repository</a>{" "}
        are the only places iloader is officially distributed. Do not download
        iloader from any other sources.
      </p>
      <div className="downloads">
        <div className="card">
          <h3>Windows</h3>
          <p>
            Requires{" "}
            <a href="https://apple.co/ms" target="_blank">
              iTunes
            </a>{" "}
            to be installed
          </p>
          <a
            className="button primary"
            href={`${base_url}iloader-windows-x64.msi`}
          >
            MSI Installer
          </a>
          <a className="button" href={`${base_url}iloader-windows-x64.exe`}>
            EXE Installer
          </a>
        </div>
        <div className="card">
          <h3>Linux</h3>
          <p>Requires usbmuxd (likely bundled with your distro)</p>
          <a
            className="button primary"
            href={`${base_url}iloader-linux-amd64.deb`}
          >
            Ubuntu/Debian (.deb)
          </a>
          <a className="button" href={`${base_url}iloader-linux-x86_64.rpm`}>
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
          <p>No prerequisites</p>
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
  );
}
