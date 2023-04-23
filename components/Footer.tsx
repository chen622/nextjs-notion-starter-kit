import * as React from 'react'
import {FaEnvelopeOpenText} from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaMastodon} from '@react-icons/all-files/fa/FaMastodon'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {FaYoutube} from '@react-icons/all-files/fa/FaYoutube'
import {FaZhihu} from '@react-icons/all-files/fa/FaZhihu'
//import {IoMoonSharp} from '@react-icons/all-files/io5/IoMoonSharp'import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
// import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  // const [hasMounted, setHasMounted] = React.useState(false)
  // const {isDarkMode, toggleDarkMode} = useDarkMode()
  //
  // const onToggleDarkMode = React.useCallback(
  //   (e) => {
  //     e.preventDefault()
  //     toggleDarkMode()
  //   },
  //   [toggleDarkMode]
  // )

  // React.useEffect(() => {
  //   setHasMounted(true)
  // }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}><a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">津ICP备19011286号-1</a>
      </div>
      <div className={styles.copyright}>Copyright © 2019-{new Date().getFullYear()} 闪念胶囊</div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
          >
            <FaMastodon />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
