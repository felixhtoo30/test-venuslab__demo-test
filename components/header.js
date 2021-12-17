import { useState, useEffect } from 'react';
import styles from './header.module.css'
import {Button} from './button'
import Link from 'next/link'
import { useRouter } from "next/router";
import { connect } from "react-redux"
import { setClickMenu } from "../redux/actions/main"

const Header = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [headerShort, setHeaderShort] = useState(false);
  const { menuToggle, setClickMenu } = props;
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    if (window.scrollY > 0) {
      console.log('what');
      setHeaderShort(true);
    } else {
      setHeaderShort(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [scrollY]);

  return (
    <header className={`${styles.Header} ${headerShort ? styles.HeaderShort : ''} container`}>
      <div className={`${styles.Header__Logo} ${menuToggle ? styles.Header__LogoAnim : ''}`}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Venus Lab"/>
        </Link>
      </div>
      <div className={`${styles.BtnMenu} ${menuToggle ? styles.clicked : ''}`} onClick={() => setClickMenu(!menuToggle)}>
        <div></div>
      </div>
      <nav className={`${styles.Header__Nav} ${menuToggle ? styles.open : ''}`}>
        <ul>
          <li className={router.pathname == "/" ? styles.active : ""}><Link href="/"><a>Home</a></Link></li>
          <li className={router.pathname == "/about" ? styles.active : ""}><Link href="/about"><a>About</a></Link></li>
          <li className={router.pathname == "/services" ? styles.active : ""}><Link href="/services"><a>Services</a></Link></li>
          <li className={router.pathname == "/portfolios" ? styles.active : ""}><Link href="/portfolios"><a>Portfolios</a></Link></li>
          <li className={router.pathname == "/blog" ? styles.active : ""}><Link href="/blog"><a>Blog</a></Link></li>
          <li className={router.pathname == "/contact" ? styles.active : ""}><Link href="/contact"><a>Contact</a></Link></li>
          <li><Button name={'Request a Quote'} classes={styles.Header__BtnMain} /></li>
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = state => {
  return { menuToggle: state.main.menuToggle }
}

const mapDispatchToProps = {
  setClickMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
