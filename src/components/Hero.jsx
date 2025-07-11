import '../styles/Hero.css';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      
      <h2>
        <TypeAnimation
          sequence={[
            'خوش آمدید به درس برنامه‌نویسی وب 2',
            2000,
            'آماده‌اید برای شروعی جذاب؟',
            2000,
          ]}
          speed={10}
          wrapper="span"
          repeat={Infinity}
        />
      </h2>

      <p>با ما تجربه‌ای متفاوت از طراحی وب خواهید داشت.</p>
      <div className="hero-buttons">
        <button>اطلاعات دوره</button>
        <button>درباره مدرس </button>
      </div>
    </div>
  </section>
);

export default Hero;