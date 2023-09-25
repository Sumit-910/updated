import './Nlogin.scss';
import { useRef, useEffect } from 'react';

function Nlogin() {
  const imageRef = useRef(null);
  
  const updateImage = () => {
    if (imageRef.current) {
      const opacity = 1 - window.scrollY / 700;
      const backgroundSize = 80 - window.scrollY / 20 + "%";
      
      imageRef.current.style.opacity = opacity;
      imageRef.current.style.backgroundSize = backgroundSize;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      updateImage();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="A3p">
      <div className="bg-image" id="bg-image" ref={imageRef}>
         
    </div>
    <div className="container">  
             <h1>EduVators</h1>
          <p>
          The proposed solution advocates for personalized learning through a combination of technology and 1:1 tuition. Blended learning, integrating face-to-face teaching with online resources, is emphasized, allowing for real-time feedback. A rotational approach in classrooms of 30 students ensures focused attention. Both teachers and advanced software adapt learning approaches to individual students. This tailored approach identifies struggling students for targeted assistance, while technology aids in handling certain tasks, freeing up teachers' time. Additionally, the solution aims to support specially abled students through innovative digital applications and technologies like AI and blockchain, ensuring a seamless and inclusive learning experience.
          </p>
            
                </div>
    </div>
  );
}

export default Nlogin;