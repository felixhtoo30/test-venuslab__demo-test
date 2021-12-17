import styles from './whatwedo.module.css'
import { Button } from './button'
import { whatWeDoData } from '../data'

const WhatWeDo = () => {

  return (
    <section id="what-we-do" className={styles.WhatWeDo} style={{backgroundImage: `url(/images/wwd-bg.jpg)`}}>
      <p className={styles.WhatWeDo__Title}>What We can do<br/>for You or Your Business</p>
      <div className={styles.WhatWeDo__List}>
        {
          whatWeDoData.map((wwd, key) => (
            <div className={styles.WhatWeDo__ListItem} key={key}>
              <div className={styles.WhatWeDo__ListItemImg}>
                <img src={wwd.image} />
              </div>
              <h3 className={styles.WhatWeDo__ListItemTitle}>
                {wwd.title}
              </h3>
              <p className={styles.WhatWeDo__ListItemDetail}>
                {wwd.detail}
              </p>
            </div>
          ))
        }
      </div>
      <div className={styles.WhatWeDo__LetsTalk}>
        <p className={styles.WhatWeDo__LetsTalkTitle}>Let's Talk</p>
        <p className={styles.WhatWeDo__LetsTalkBrief}>Whether you're interested in working with us or for us, we're always happy to chat.</p>
        <Button name={'Request a Quote'} classes={`${styles.WhatWeDo__LetsTalkBtn}`} />
      </div>
    </section>
  )
}

export default WhatWeDo
