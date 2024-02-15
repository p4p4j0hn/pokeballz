import './Banner.css';
import banner from '../assets/banner.svg';
// import 'tachyons';


export default function Banner() {
  return(
    <>
      <img src={banner} className="banner" alt="Pokéballz" />
    </>
  );
}
