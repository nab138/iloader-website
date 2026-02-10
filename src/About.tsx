export default function About() {
  return (
    <div className="glass-card">
      <h2>About iloader</h2>
      <p>
        iloader is a free and open source user-friendly sideloader designed to
        make installing SideStore (or other apps) on an iDevice as easy as
        possible.
      </p>
      <div>
        <h3>Features</h3>
        <ul>
          <li>Supports Windows, Linux, and macOS</li>
          <li>Automatically installs and helps setup SideStore</li>
          <li>Install any .ipa application</li>
          <li>Manage pairing files for apps like StikDebug or Protokolle</li>
          <li>See and manage development certificates and app ids</li>
          <li>Open source & MIT licensed</li>
        </ul>
      </div>
      <div>
        <p className="disclaimer">
          iloader is designed to be safe and unlikely to cause issues, but we
          are not responsible for damage to devices, data, or Apple accounts.
        </p>
        <p className="disclaimer">
          We are not responsible for any misuse of iloader; please ensure
          compliance with all applicable laws and regulations.
        </p>
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
          href="https://github.com/nab138/iloader/issues"
          target="_blank"
        >
          Report a Bug
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
  );
}
