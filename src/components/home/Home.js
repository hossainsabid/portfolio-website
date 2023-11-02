import React, { useEffect, useRef } from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Typed from 'typed.js'; // Import Typed.js

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['A Digital Craftsman', 'A Full Stack Developer','A Software Engineer', 'A Problem Solver', 'A Mathematician', 'A Computer Scientist'],
      typeSpeed: 70, // Typing speed in milliseconds
      backSpeed: 25, // Backspacing speed in milliseconds
      loop: true, // Loop the animation
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
      <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }} height={{ xs: '35vh', md: '40vh' }} borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
      <Box>
        <h1>
          Hello I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
        </h1>
        <h2><span ref={textRef}></span></h2>
        <Box component={'ul'} p={'0.8rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {info.socials.map((social, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
