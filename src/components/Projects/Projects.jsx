import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bimtian from '../images/bimtian.png';
import smeb from '../images/smeb.png';
import github from '../images/github.png';
import awesome_blog from '../images/awesome-blog.png';

// Web projects
const webItem = [
  {
    link: 'https://www.bimtian.org/',
    title: 'BIMTIAN - A Marine Student Archive`',
    techStack: 'Tech Stack: React JS, Redux Toolkit, Bootstrap, MySql, VPS hosting',
    desc: 'BIMTian is Marine Students archive type website',
    image: bimtian,
    color: '#0FFFFF',
    githubLink: 'https://github.com/kazi-mamun-716/bimtians-client'
  },
  {
    link: 'https://stride-blog-client.vercel.app/',
    title: 'Awesome Blog',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: React Js, bootstrap, Redux Toolkit, Mongodb',
    image: awesome_blog,
    color: '#E5E483',
    githubLink: 'https://github.com/kazi-mamun-716/awesome-blog'
  },
  {
    link: 'https://www.smeb.online/',
    title: 'SMEB',
    techStack:
      'Technology used: Reactjs, Mongodb, Tailwind CSS, VPS Hosting, Redux Toolkit, Vite',
    desc: 'This is a community based website.',
    image: smeb,
    color: '#D2E0FB'
    // githubLink: 'https://github.com/mittalsam98'
  },
];


export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
