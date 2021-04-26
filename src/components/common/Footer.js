import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLine, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = function (props) {

  var footerLinkList = [];
  if (props.data && props.data.link && props.data.link.length > 0) {
    props.data.link.forEach(function (footerLink, footerLinkIdx) {
      footerLinkList.push(
        <div className={classes.FooterLinkItem} key={'FooterLinkItem' + footerLinkIdx}>
          <a className={classes.FooterLinkA} href={footerLink.url}>{footerLink.label}</a>
        </div>
      );
    });
  }

  return (
    <div className="Footer">
      <div className={classes.FooterTop}>
        <div><a href=".">ページトップへ</a></div>
      </div>
      <div className={classes.FooterLink}>
        <div className={classes.FooterLinkGroup}>
          {footerLinkList}
        </div>
        <div className={classes.FooterSNSLink}>
          <a href="https://www.youtube.com/user/TOHOCINEMASmagazine">
            <FontAwesomeIcon className={classes.FooterSNSIcon} icon={faYoutube} />
          </a>
          <a href="https://line.me/R/ti/p/%40tohocinemas">
            <FontAwesomeIcon className={classes.FooterSNSIcon} icon={faLine} />
          </a>
          <a href="https://twitter.com/tohocinemas_m">
            <FontAwesomeIcon className={classes.FooterSNSIcon} icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/tohocinemasmagagine/">
            <FontAwesomeIcon className={classes.FooterSNSIcon} icon={faFacebookSquare} />
          </a>
          <a href="https://www.instagram.com/tohocinemas_official/">
            <FontAwesomeIcon className={classes.FooterSNSIcon} icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className={classes.FooterCopyright}>TM & © TOHO Cinemas Ltd. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
