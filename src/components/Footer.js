import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@material-ui/core/Link';

export default () => (
  <div className="container taCenter">
  <footer className="footer">
      <div>
    {/* <h2 className="taCenter"> */}
    For general enquiries:{' '}
      <a href="indiandance.nus@gmail.com">indiandance.nus@gmail.com</a>

    {/* </h2> */}
    <div className="taCenter">
    <br />

   <Link href="https://www.facebook.com/NUSIndianDance/">
    <FacebookIcon fontSize="large"></FacebookIcon>
    </Link>
    <Link href="https://www.instagram.com/nusindiandance/">
    <InstagramIcon fontSize="large" ></InstagramIcon>
    </Link>
    <Link href="https://www.youtube.com/channel/UCF-wUntL_q5HWIbHjt0cL8Q">
      <YouTubeIcon fontSize="large" ></YouTubeIcon>
      </Link>
</div>
    <br />
        <span>
          All rights reserved  © Copyright {new Date().getFullYear()} {' '}
          NUS Indian Dance
        </span>
      </div>
    </footer>
  </div>
)
