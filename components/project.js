
import { useEffect, useState, useRef } from "react";
import styles from "./project.module.css"
import useInView from "react-cool-inview"


const Project = ({proj, keyVal}) => {

  // const [anim, setAnimState] = useState({
    //   percent: 100,
    //   x: 600,
    //   y: 600,
    //   scale: 1
  // });
  const [scrollY, setScrollY] = useState(0);
  const [animShow, setAnimShow] = useState(false);
  const [animLeft, setAnimLeft] = useState(false);
  const { observe } = useInView({
    onEnter: ({ entry }) => {

      setAnimShow(true);
      if (keyVal%2 != 0) setAnimLeft(true); 
      else setAnimLeft(false);

      // const scrollView = scrollY + (window.innerHeight / 1)
      // const top = entry.boundingClientRect.top;
      // const height = entry.target.parentElement.clientHeight * (window.innerWidth < 768 ? 0.6 : 1)
      // const minHeight = Math.min(scrollView - top, height)
      // const maxHeight = Math.max(0, minHeight)
      // const calcHeight = height - maxHeight
      // setAnimState(prevAnim => ({
      //   ...prevAnim,
      //   x: calcHeight * (key % 2 ? -0.8 : 0.8),
      //   y: calcHeight * 0.8,
      //   percent : maxHeight / height * 100,
      //   scale : (maxHeight / height * 100) * 0.01,
      // }));
    },
    onLeave: () => {
      setAnimShow(false);
    },
    // rootMargin: "-100px 0px"
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    
    // if (projectElmRef.current.offsetTop <= window.innerHeight) {
    //   let el = projectElmRef.current;
      // const scrollView = scrollY + (window.innerHeight / 1)
      // const top = el.offsetTop
      // const height = 100 * (window.innerWidth < 768 ? 0.6 : 1)
      // const minHeight = Math.min(scrollView - top, height)
      // const maxHeight = Math.max(0, minHeight)
      // const calcHeight = height - maxHeight
      // setAnimState(prevAnim => ({
      //   ...prevAnim,
        // x: calcHeight * (el.key % 2 ? -0.8 : 0.8),
        // y: calcHeight * 0.8,
        // percent : maxHeight / height * 100,
        // scale : anim.percent * 0.01,
      //   x: 600,
      //   y: 600,
      //   percent: 100,
      //   scale: 1,
      // }));
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>

      <div 
        className={`${styles.Project} ${styles.Project__TopClip} container`}
        style={{backgroundColor: proj.bgColor}}
        >
        <div className={styles.Project__Img} ref={observe}>
          <div className={`${styles.Project__ImgCircle} ${animShow ? styles.Project__ImgCircleAnim : ''}`} style={{
            backgroundImage: proj.circleColor
          }}></div>
          <img src={proj.mainImage} className={animShow ? (animLeft ? styles.Project__ImgAnimLeft : styles.Project__ImgAnimRight) : ''}/>
        </div>
        <div className={styles.Project__Info}>
          <img src={proj.logo} />
          <p className={styles.Project__InfoTitle} style={{color: proj.textColor}}>{proj.title}</p>
          <p className={styles.Project__InfoType} style={{color: proj.textColor}}>{proj.type}</p>
          <p className={styles.Project__InfoDetail} style={{color: proj.textColor}}>{proj.detail}</p>
          <button className={styles.Project__BtnMore}>more
          <img src={'/images/arrow.png'} />
          </button>
        </div>
      </div>
      </>
  )
}

export default Project