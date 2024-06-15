"use client"
import React, { useEffect, useState } from 'react'
import styles from '../styles/contact.module.css';
import CalCalender from '../components/CalCalender/CalCalender';
import { motion } from 'framer-motion';
import Loader from '../components/Loader/Loader';
import TextInput from '../components/TextInput/TextInput';
import AdvanceHorizontalLine from '../components/AdvanceHorizontalLine/AdvanceHorizontalLine';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import $ from 'jquery';
import { Slide, SlideProps, Snackbar } from '@mui/material';
import HorizontalLine from '../components/HorizontalLine/HorizontalLine';

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
}

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({ name: '', email: '', subject: '', message: '', reference: '', referenceBy: '' });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (contactDetails.reference == "Other") {
      $("#other-reference").show();
    } else {
      $("#other-reference").hide();
    }
  }, [contactDetails.reference]);

  const onChangeName = (event: any) => {
    setContactDetails({ ...contactDetails, name: event.target.value })
  }

  const onChangeEmail = (event: any) => {
    setContactDetails({ ...contactDetails, email: event.target.value })
  }

  const onChangeSubject = (event: any) => {
    setContactDetails({ ...contactDetails, subject: event.target.value })
  }

  const onChangeMessage = (event: any) => {
    setContactDetails({ ...contactDetails, message: event.target.value })
  }

  const onChangeReference = (event: any) => {
    setContactDetails({ ...contactDetails, reference: event.target.value, referenceBy: event.target.value != "Other" ? event.target.value : "" })
  }

  const onChangeReferenceBy = (event: any) => {
    setContactDetails({ ...contactDetails, referenceBy: event.target.value })
  }

  const handleClose = () => {
    setOpen(false);
  }

  const submitForm = async (event: any) => {
    event.preventDefault();
    let flag = true;
    let inputs = $(`.${styles.input} input`);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    inputs.each((_, inputSelector) => {
      let input = $(inputSelector);
      if (input.val() === "" && (contactDetails.reference === "Other" || (contactDetails.reference != "Other" && input.attr("name") !== "reference-by"))) {
        if (input.attr("name") !== "reference-by") {
          setMessage(`${input.attr("placeholder")} is required!`);
        } else {
          setMessage(`Reference is required!`);
        }
        setOpen(true);
        flag = false;
        return false;
      } else {
        if (input.attr("name") == "email" && !emailRegex.test(input.val()?.toString() ?? "")) {
          setMessage("Please enter a valid email address!");
          setOpen(true);
          flag = false;
          return false;
        }
      }
    });

    if (contactDetails.reference == "") {
      setMessage(`Reference is required!`);
      setOpen(true);
      flag = false;
      return false;
    }

    let textarea = $(`.${styles.input} textarea`);
    if (flag && textarea.val() === "") {
      setMessage(`${textarea.attr("placeholder")} is required!`);
      setOpen(true);
      return false;
    }

    if (flag) {
      setLoading(true);
      await axios.post("api/mailsend", contactDetails)
        .then(() => {
          setLoading(false);
          setMessage("Message sent successfully!");
          setOpen(true);
          setContactDetails({ name: '', email: '', subject: '', message: '', reference: '', referenceBy: '' });
        }).catch((error) => {
          setMessage(error.message);
          setOpen(true);
          setLoading(false);
        });
    }
  }

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
        <h1 className={styles.heading}>Contact Us</h1>
        <HorizontalLine />
        <div className={styles.contactWrapper}>
          <div className={`${styles.lowerWrapper} my-5 text-center px-2`}>
            <h3 className='mb-4 text-uppercase'>Let's discuss your project!</h3>
            <div className={styles.contactForm}>
              <div className={styles.body}>
                <TextInput name="name" placeholder="Name" value={contactDetails.name} onChange={onChangeName} className={styles.input} />
                <TextInput name="email" placeholder="Email" value={contactDetails.email} onChange={onChangeEmail} type="email" className={styles.input} />
                <div className={`${styles.inputWrapper}`}>
                  <select id='reference' className={styles.input} onChange={onChangeReference}>
                    <option value="" selected disabled>How did you heared about us?</option>
                    <option value="By Freinds">By Freinds</option>
                    <option value="By Ads">By Ads</option>
                    <option value="By Linkedin">By Linkedin</option>
                    <option value="By Social media">By Social media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <TextInput name="reference-by" id="other-reference" placeholder="From where you got our reference?" value={contactDetails.referenceBy} onChange={onChangeReferenceBy} className={styles.input} />
                <TextInput name="subject" placeholder="Subject" value={contactDetails.subject} onChange={onChangeSubject} className={styles.input} />
                <TextInput name="message" placeholder="Message" value={contactDetails.message} type="textarea" onChange={onChangeMessage} className={styles.input} />
                {
                  loading ?
                    <LoadingButton loading variant="outlined" color="primary" className={styles.loadingButton}>Submit</LoadingButton>
                    :
                    <Button variant="contained" type='button' color="inherit" className={`${styles.startProjectButton} my-2`} onClick={submitForm}>Submit</Button>
                }
              </div>
            </div>
          </div>
          <AdvanceHorizontalLine content="OR" />
          <div className={`${styles.upperWrapper} my-5`}>
            <CalCalender />
          </div>
        </div>

        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          id="error-pop-up"
          message={message}
          TransitionComponent={SlideTransition}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      </motion.div>
    </>
  )
}

export default Contact