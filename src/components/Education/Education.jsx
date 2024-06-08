import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>Nov (2018)-Present</span>
                      </h2>
                      <p>
                        I am currently working as <b>Assistant Mechanical Engineer</b> at{' '}
                        <a target='_blank' href='https://youthbd.com/sister-concern/midland-east-power-co-ltd/'>
                          <b>MEPL</b>
                        </a>{' '}
                        <i>
                          (By day, I work as a Mechanical Engineer at a private power plant, ensuring efficient operations and maintenance. By night, I immerse myself in web development, working on both front-end and back-end projects.)
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduation at SU <span>2018-2022</span>
                      </h2>
                      <p>
                        I completed my undergraduation in ME (Mechanical Engineering)
                        from <a href='https://su.edu.bd/'>SU</a>.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Diploma Education <span>2008-2013</span>
                      </h2>
                      <p>
                        I have completed my diploma in engineering education from BIMT with major subjects as
                        Marine Engineering in BTEB.{' '}
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
