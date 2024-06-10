"use client"

import React, { useEffect } from 'react'
import '../styles/service.css'
import { services } from './services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faCertificate, faLaptopCode, faSpinner } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import { gsap } from 'gsap';
import SplitText from 'split-type';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import SeoButton from '../components/SeoButton/SeoButton';
import styles from './services.module.css'
import { motion } from 'framer-motion';
import Loader from '../components/Loader/Loader';

const Services = () => {

  useEffect(() => {
    $(() => {
      if ($('.img-slider li:first-child').hasClass('show_class') && $('.third-img-slider li:first-child').hasClass('active')) {
        $('.third-img-slider li:first-child').css("opacity", "0");
      } else {
        $('.third-img-slider li:first-child').css("opacity", "1");
      }

      gsap.to('.img-slider li, .second-img-slider li, .third-img-slider li', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 0.5,
      });

      const img_height = $('.img-slider li img, .second-img-slider li img, .third-img-slider li img');
      const img_details = $('.img-slider li .img-details, .second-img-slider li .img-details, .third-img-slider li .img-details');

      img_height.each((index, img) => {
        const img_detail = img_details[index];
        img.style.height = `calc(100% - ${img_detail.offsetHeight + 12}px)`;
      });

      let details = $('.img-slider li');

      function animateText(element: any) {
        const splitTypes = element.querySelectorAll('.img-details h6');
        splitTypes.forEach((char: HTMLElement, index: number) => {
          const text = new SplitText(char, {
            types: 'chars'
          });
          gsap.from(text.chars, {
            y: 50,
            duration: 0.5,
            stagger: 0.1,
          });
        });
        const splitTypes_profession = element.querySelectorAll('.img-details span');
        splitTypes_profession.forEach((char: HTMLElement, index: number) => {
          const text = new SplitText(char, {
            types: 'chars'
          });
          gsap.from(text.chars, {
            y: 50,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.2
          });
        });
      }
      animateText(details[0]);

      //Slider animation
      let slides = $('.img-slider ul li');
      let secondSlides = $('.second-img-slider ul li');
      let thirdSlides = $('.third-img-slider ul li');
      let second_slider = $('.second-img-slider');

      let currentActive = 1;
      let secondCurrentActive = 2;
      let thirdCurrentActive = 0;

      const img_slider_first_child = $('.img-slider li:first-child');
      const img_slider_last_child = $('.img-slider li:last-child');
      const third_img_slider_first_child = $('.third-img-slider li:first-child');
      const second_img_slider_last_child = $('.second-img-slider li:last-child');
      $("#service-container").on('click', (event) => {
        setTimeout(() => {
          if (img_slider_first_child.hasClass('show_class') && third_img_slider_first_child.hasClass('active')) {
            third_img_slider_first_child.css("opacity", "0");
          } else {
            third_img_slider_first_child.css("opacity", "1");
          }
          if (img_slider_last_child.hasClass('show_class') && second_img_slider_last_child.hasClass('active')) {
            second_slider.addClass('clip');
          } else {
            second_slider.removeClass('clip');
          }
        }, 201);

        if (event.clientX > window.innerWidth / 2) {
          if (currentActive < slides.length) {
            slides[currentActive].classList.add('active');
            currentActive++;
          }
          if (currentActive >= 2 && secondCurrentActive < secondSlides.length) {
            secondSlides[secondCurrentActive].classList.add('active');
            secondCurrentActive++;
          }
          if (currentActive >= 2 && thirdCurrentActive < thirdSlides.length - 1) {
            thirdSlides[thirdCurrentActive].classList.add('active');
            thirdCurrentActive++;
          }
        } else {
          if (currentActive > 1 && currentActive <= slides.length) {
            slides[currentActive - 1].classList.remove('active');
            currentActive--;
          }
          if (currentActive <= slides.length - 2 && secondCurrentActive > 2) {
            secondSlides[secondCurrentActive - 1].classList.remove('active');
            secondCurrentActive--;
          }
          if (currentActive <= slides.length - 1 && thirdCurrentActive > 0) {
            thirdSlides[thirdCurrentActive - 1].classList.remove('active');
            thirdCurrentActive--;
          }
        }
      });


      const second_imgSlider = $('.second-img-slider ul');
      let second_timer: NodeJS.Timeout;
      $("#service-container").on('mousemove', function (e) {

        clearTimeout(second_timer);
        let xPos = e.clientX - window.innerWidth / 2;
        if (xPos < 0) {
          xPos = 0;
        }
        const rotation = xPos > 0 ? 15 : 0;
        gsap.to(second_imgSlider, {
          x: `${xPos}px`,
          rotation: rotation,
          duration: 1,
          ease: 'power2.out'
        });
        second_timer = setTimeout(function () {
          gsap.to(second_imgSlider, {
            rotation: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }, 500);
      });

      const third_imgSlider = $('.third-img-slider ul');
      let third_timer: NodeJS.Timeout;
      $("#service-container").on('mousemove', function (e) {

        clearTimeout(third_timer);
        let xPos = e.clientX - window.innerWidth / 2;
        if (xPos > 0) {
          xPos = 0;
        }
        const rotation = xPos < 0 ? -15 : 0;
        gsap.to(third_imgSlider, {
          x: `${xPos}px`,
          rotation: rotation,
          duration: 1,
          ease: 'power2.out'
        });
        third_timer = setTimeout(function () {
          gsap.to(third_imgSlider, {
            rotation: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }, 500);
      });

      //content slider
      const contentItems = $('.content-slider li');
      let content_activeIndex = 0;

      $("#service-container").on('click', function (e) {
        setTimeout(() => {
          if (e.clientX > window.innerWidth / 2) {
            if (content_activeIndex < contentItems.length - 1) {
              content_activeIndex++;
            }
            contentItems[content_activeIndex - 1].classList.remove('active');
            contentItems[content_activeIndex].classList.add('active');
          } else {
            if (content_activeIndex > 0) {
              contentItems[content_activeIndex - 1]?.classList.add('active');
              contentItems[content_activeIndex].classList.remove('active');
              content_activeIndex--;
            }
          }
        }, 200);
      });

      let details_activeIndex = 0;

      $("#service-container").on('click', function (e) {
        setTimeout(() => {
          if (e.clientX > window.innerWidth / 2) {
            if (details_activeIndex < details.length - 1) {
              details[details_activeIndex].classList.remove('show_class');
              details_activeIndex++;
              details[details_activeIndex].classList.add('show_class');
              animateText(details[details_activeIndex]);
            }
          } else {
            if (details_activeIndex > 0) {
              details[details_activeIndex].classList.remove('show_class');
              details_activeIndex--;
              details[details_activeIndex].classList.add('show_class');
              animateText(details[details_activeIndex]);
            }
          }
        }, 200);
      });
      gsap.set(".arrow", { xPercent: -50, yPercent: -50 });

      // Mouse Cursor Animation
      const arrow = $(".arrow");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.15;

      const xSet = gsap.quickSetter(arrow, "x", "px");
      const ySet = gsap.quickSetter(arrow, "y", "px");

      $("#service-container").on("mousemove", (e) => {
        arrow.css("opacity", "1");
        mouse.x = e.pageX;
        mouse.y = e.pageY;

        const img = $('.arrow-img-wrapper');
        if (e.clientX > window.innerWidth / 2) {
          img.css("transform", "scaleX(-1)");
        } else {
          img.css("transform", "scaleX(1)");
        }
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });

    });
  }, []);

  const serviceSubHeading = (
    <p className={styles.titleSubHeading}>
      <b>6 Mens</b> is 6 Mens is a team of IT outsourcing business professionals with 10 years of experience and a reputation for offshore <b>web & Mobile development.</b>
    </p>
  );

  return (
    <>
      <Loader />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          y: { type: "spring", stiffness: 60 },
          ease: "easeInOut",
          duration: 0.6
        }}
        className={styles.contactSectionWrapper}
      >
        <h1 className={styles.heading}>Services</h1>
        <SectionTitle heading="Preparing For Your Success Provide Best IT Solutions." subHeading={serviceSubHeading} className="pb-0" />
      </motion.div>
      <SeoButton />
      <div className="service-wrapper" id="service-container">
        <div className="arrow">
          <div className="arrow-img-wrapper">
            <FontAwesomeIcon icon={faArrowCircleLeft} className="img-fluid dark-arrow d-none" />
          </div>
        </div>

        <div className="slider">
          <div className="content-slider">
            <ul>
              {
                services.length && services.map((service, index) => {
                  return (
                    <li className={index === 0 ? "active" : ""} key={index}>
                      <div className="title-main">
                        <div className="title-wrapper">
                          <h1 className="t-stroke italic">{service.title}</h1>
                          <h1>{service.title}</h1>
                          <h1 className="t-stroke italic">{service.title}</h1>
                          <h1>{service.title}</h1>
                        </div>
                        <div className="title-wrapper">
                          <h1 className="t-stroke italic">{service.title}</h1>
                          <h1>{service.title}</h1>
                          <h1 className="t-stroke italic">{service.title}</h1>
                          <h1>{service.title}</h1>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="third-img-slider">
            <ul>
              {
                services.length && services.map((service, index) => {
                  return (
                    <li className={index === 0 ? "active" : ""} key={index}>
                      <img src={service.img?.url} alt="images" className="img-fluid" />
                      <div className="img-details">
                        <h6>{service.title}</h6>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="img-slider">
            <ul>
              {
                services.length && services.map((service, index) => {
                  return (
                    <li className={index === 0 ? "active show_class" : ""} key={index}>
                      <img src={service.img?.url} alt="images" className="img-fluid" />
                      <div className="img-details">
                        <h6>{service.title}</h6>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="second-img-slider">
            <ul>
              {
                services.length && services.map((service, index) => {
                  return (
                    <li className={index == 1 ? "active" : ""} key={index}>
                      <img src={service.img?.url} alt="images" className="img-fluid" />
                      <div className="img-details">
                        <h6>{service.title}</h6>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>

        </div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          y: { type: "spring", stiffness: 60 },
          ease: "easeInOut",
          duration: 0.6
        }}
        className={styles.tableContent}>
        <table className="table table-hover">
          <thead>
            <motion.tr
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                x: { type: "spring", stiffness: 60 },
                ease: "easeInOut",
                duration: 0.6
              }}>
              <th scope="col">Service</th>
              <th scope="col">Description</th>
            </motion.tr>
          </thead>
          <tbody>
            {
              services.length && services.map((service, index) => {
                return (
                  <motion.tr
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1,
                      x: { type: "spring", stiffness: 60 },
                      ease: "easeInOut",
                      duration: 0.6
                    }}
                    key={index}>
                    <th scope="row">{service.title}</th>
                    <td>{service.description}</td>
                  </motion.tr>
                )
              })
            }
          </tbody>
        </table>
      </motion.div>
    </>
  )
}

export default Services