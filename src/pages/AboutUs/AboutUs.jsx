import React from "react";
import classes from "./AboutUs.module.css";
import iogo from "../../assets/logo.png";


const AboutUs = () => {
  return (
    <div className={classes["aboutUs"]}>
      <div className={classes.header}>
        <div className={classes["brand--logo"]}>
          <a href="/">
            <img src={iogo} alt="" />
          </a>

          <a href="/">Attendance Management</a>
        </div>

        <div className={classes["main-nav"]}>
          <nav>
            <a href="/login" id="login">
              Login
            </a>
            <a href="/register" id="register">
              Register
            </a>
          </nav>
        </div>
      </div>

      <div className={classes["heading"]}>
        <h1>About Our Application</h1>
      </div>
      <div className={classes.short_def}>
        <p>
          This is a web-base application , which is basically an automated
          system for taking attendance. The system will make the process of
          taking attendance very easy. And reduces the difficulties in taking
          attendance like in manual method.
        </p>
      </div>

      <div className={classes["team"]}>
        <div className={classes["heading"]}>
          <h1>About Ourself</h1>
        </div>

        

        <p>
          My name is Rizwan. I am a fourth year student of B-Tech CSE at IIIT
          Sri City . I am a Full Stack Developer and have experience of three
          past internships as a full stack Developer .
        </p>
        <p>
          I have a good understanding of data structures ( Specialist at
          Codeforces ) , (Knight at LeetCode) and excellent understanding of
          system design (high level design & low level design).
        </p>
        <p>
            I have experience of building highly scalable,  highly available and highly secure applications
        </p>

        

 
      </div>

     
      <footer>
        <p class="content">&copy; Mohd Rizwan</p>
      </footer>
    </div>
  );
};

export default AboutUs;
