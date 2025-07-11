import React from "react";
import "../styles/Instructor.css";
import teacherImg from "../assets/teacher.jpg";

import { FaUserGraduate } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";

const InstructorIntro = () => {
  return (
    <section className="instructor">
      <div className="instructor-content">
        <h2 className="instructor-title">درباره استاد</h2>

        <div className="instructor-box">
          <div className="instructor-img">
            <img src={teacherImg} alt="استاد" />
          </div>

          <div className="instructor-info">
            <h3 className="instructor-name">مهندس علی کریمی</h3>

            <div className="instructor-stats">
              <div>
                <HiSquares2X2 size={18} />
                <span>۵ دوره</span>
              </div>
              <div>
                <FaUserGraduate size={18} />
                <span>۲۵۰+ دانشجو</span>
              </div>
            </div>

            <p className="instructor-bio">
              استاد علی کریمی با بیش از ۱۰ سال تجربه در زمینه برنامه‌نویسی وب و تدریس حرفه‌ای،
              در این درس تلاش می‌کنه مفاهیم React و توسعه وب مدرن رو ساده و کاربردی آموزش بده.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorIntro;
