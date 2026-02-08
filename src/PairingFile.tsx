// Copyright (C) 2026 nab138
// Licensed under the GNU AGPLv3. See LICENSE for details.

import "./App.css";
import Downloads from "./Downloads";
import { Link } from "react-router";

export default function PairingFile() {
  return (
    <div className="workspace">
      <section className="workspace-section">
        <div className="section-header">
          <p className="section-label">Pairing</p>
          <span className="section-hint">Place pairing file</span>
        </div>
        <div className="glass-card">
          <h2>Pairing File</h2>
          <p>
            iloader can create a pairing file for apps like StikDebug or
            Protokolle to talk to your device remotely. This pairing file is
            device-specific, time-specific and required to use those apps.
          </p>
          <div>
            <h3>Place Pairing File</h3>
            <ol>
              <li>
                Install iloader and its requirements from the downloads below.
              </li>
              <li>
                Connect your iDevice to your computer via USB cable (if your
                device appears wirelessly that will work too) and click refresh.
                Your device should appear in the list.
              </li>
              <li>
                Click "
                <span style={{ fontFamily: "monospace" }}>
                  Manage Pairing File
                </span>
                "
              </li>
              <li>
                To the right of your chosen app, click `Place`. "Pairing file
                placed successfully!" should appear in green.
              </li>
            </ol>
          </div>
        </div>
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
          <p className="section-label">About</p>
          <span className="section-hint">Info about iloader</span>
        </div>
        <div className="glass-card">
          <h2>About iloader</h2>
          <p>
            iloader is a free and open source user-friendly sideloader designed
            to make installing SideStore (or other apps) on an iDevice as easy
            as possible. Learn more on the iloader home page.
          </p>
          <Link className="button" to="/">
            iloader Home Page
          </Link>
        </div>
      </section>
    </div>
  );
}
