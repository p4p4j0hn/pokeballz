import './HelpContent.css';

export default function HelpContent({ onClose }) {
  return (
    <div className="modal tc f4 ba br2 bw2 ph3 pv2 mb2 dib">
      <div className="pa2" >Click the pokeball to play</div>
      <button className="f6 grow br-pill ba bw1 ph3 pv2 mb2 dib"
              onClick={onClose}>Close</button>
    </div>
  );
}
