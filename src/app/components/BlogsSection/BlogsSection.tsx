import React from 'react'
import styles from './BlogsSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import { blogsData } from './blogsData';

const BlogsSection = () => {
  const blogSubHeading = (
    <p className={styles.titleSubHeading}>
      Amazing website! It exceeded all my <b>expectations</b>, delivering an <b>exceptional</b> user experience.
    </p>
  )

  return (
    <SectionWrapper className={styles.blogsSectionWrapper}>
      <SectionTitle heading="See Our Blog" subHeading={blogSubHeading} />
      <div className={styles.blogsWrapper}>

        {blogsData.length && blogsData.map((blog)=>(
          <div className={styles.blogDiv}>
          <div className={styles.blogImage}>
            <img src={blog?.illustration?.url} alt={blog?.illustration?.alt} />
          </div>
          <div className={styles.blogBody}>
            <p className={styles.blogAuthor}><FontAwesomeIcon icon={faUser} /> {blog?.authorName}</p>
            <h5 className={styles.blogHeading}>How To Develop An On-Demand Home Service With Features?</h5>
            <p className={styles.blogDescription}>{blog.description}</p>
            <Link href="/blog" className={styles.blogReadMoreButton}>
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        ))}

      </div>
    </SectionWrapper>
  )
}

export default BlogsSection
