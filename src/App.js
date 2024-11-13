import './App.css';
import foto  from './assets/foto.jpg';
import contact  from './assets/contact2.svg';
import github  from './assets/github.svg';
import ftr  from './assets/flutter.svg';
import compose  from './assets/compose.png';
import laravel  from './assets/laravel.svg';
import figma  from './assets/figma.svg';

function App() {
  return (
    <div className="container">
      <nav className='navbar'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#sertifikat">Certificate</a></li>
        </ul>
      </nav>
      <div className='display'>
        <div id='home' className='container-home'>
          <h1 id='title'>Welcome to My Portfolio, I am Rahmad</h1>
          <div className='flex-row gap-2'>
          <p className='bg-color'>I am a mobile and web programmer</p>
            <a href="https://wa.me/6282371662413"><img className="size-icon1" src={contact} alt="contact" /></a>
            <a href="https://github.com/rahmad1111"><img className="size-icon2" src={github} alt="github" /></a>
          </div>
          <br/><br/>
          <p className='size-text'>I am a student of Universitas Dinamika Bangsa Jambi, I am now in my final semester and am currently participating in the Camp Celerates Program for the Fullstack Developer section. Previously I attended MBKM at Mitra Infinite Learning as Mobile Development, the reason I joined this Fullstack program was to increase my knowledge in the field of websites.</p>
          <h3 className='space-skill'>Skills :</h3>
          <div className='flex-row  gap-3'>
            <img src={ftr} alt="flutter" className='size-icon3'/>
            <img src={compose} alt="compose" className='size-icon3'/>
            <img src={laravel} alt="laravel" className='size-icon3'/>
          </div>
        </div>
        <div>
          <img src={foto} alt="Foto" className='img'/>
        </div>
      </div>
      <div id='project' className='container-project'>
        <h2 className='title' >Project</h2>
        <div className='flex-row gap-1'>
          <div>
            <h3>1. Project MBKM Infinite Learning</h3>
            <p>Create my soul project in Kotlin programming language in Jetpack Compose framework</p>
            <div className='flex-row gap-2'>
              <p>View Project :</p>
              <a href="https://github.com/rahmad1111/Sejiwaku"><img className="size-icon2" src={github} alt="github" /></a>
              <a href="https://www.figma.com/proto/9eqQfkTl9kQyEReU8Wtb9a/Figdesign_MobxWeb_GK?page-id=4%3A2&node-id=281-1276&node-type=canvas&viewport=337%2C753%2C0.13&t=bLOEV6j3CwC71EuH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A2789&show-proto-sidebar=1"><img className="size-icon2" src={figma} alt="figma" /></a>
            </div>
          </div>
          {/* <div className='project'>
            <h3>Project 2</h3>
            <p>This is a simple website template created using React.js</p>
            </div> */}
        </div>
        </div>
        <div id='sertifikat' className='container-sertifikat'>
          <h2 id='title'>Certificate</h2>
          <div>
            <p>- MBKM Certificate of Internship with Mitra Infinite Learning in the year 2024</p>
          </div>
        </div>
      </div>
  );
}

export default App;
