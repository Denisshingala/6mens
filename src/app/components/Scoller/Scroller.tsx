"use client"

import React, { useEffect } from "react"
import styles from "./Scroller.module.css"
import $ from 'jquery'

const Scroller = () => {


  useEffect(() => {
    window.onscroll = function () {
      const scrollTop = $(window).scrollTop() ?? 0;
      const documentHeight = $(document).height() ?? 0;
      const windowHeight = $(window).height() ?? 0;

      var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercent) {
        $("#scrollToTopButton").css({ "left": "30px", "display": "block" });
      } else {
        $("#scrollToTopButton").css({ "left": "-150px" });
      }
      $("#scrollToTopButton img").css({ "transform": "rotate(" + scrollPercent * 10 + "deg)" });
      $("#percentageIndicator").html(Math.round(scrollPercent) + "%");
    }

    $("#scrollToTopButton").on("click", () => {
      $("html, body").animate({ scrollTop: 0 }, 0);
    })
  }, [])

  return (
    <>
      <div id="scrollToTopButton" className={styles.scrollToTopButton}>
        <img src="scroll_top.svg" alt="scroller" id="scroller" className={styles.scroller} />
        <span id="percentageIndicator" className={styles.percentageIndicator}>0%</span>
      </div>
    </>
  )
}

export default Scroller