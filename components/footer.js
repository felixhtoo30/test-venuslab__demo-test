import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Social}>
        <a href="https://www.facebook.com/venuslab.co"><img src={'/images/icon-fb.svg'} /></a>
        <a href="https://www.linkedin.com/company/venuslab"><img src={'/images/icon-linkedin.svg'} /></a>
      </div>
      <a href="tel:+959 972 709 001">+959 972 709 001</a>&nbsp;•&nbsp;
      <a href="mailto:nwaung@venuslab.co">nwaung@venuslab.co</a><br />
      <a href="#">No.204, 8th Floor, Tower A, The Leaf Residence, Dama Thukha Kyaung Lane, Hlaing Township, Yangon.</a><br />
      <div className={styles.Footer__copyright}>© 2019 VenusLab</div>
    </footer>
  )
}

export default Footer
