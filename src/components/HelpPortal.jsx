import { useState } from 'react';
import { createPortal } from 'react-dom';
import HelpContent from './HelpContent';

export default function HelpPortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="pa2 f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib blue"
              onClick={() => setShowModal(true)}>
        Help
      </button>
      {showModal && createPortal(
        <HelpContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
