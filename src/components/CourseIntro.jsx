
import React from "react";
import "../styles/CourseIntro.css";
import CodingImg from "../assets/coding girl.svg"; 
import { FaUserGraduate, FaClock, FaTasks } from "react-icons/fa";

const CourseIntro = () => {
  return (
    <section className="course-intro">
      <div className="intro-left">
        <img src={CodingImg} alt="Coding Illustration" className="intro-image" />
      </div>

      <div className="intro-right">
        <p className="intro-subtitle">معرفی درس برنامه‌نویسی وب ۲</p>
        <h1 className="intro-title">!یادگیری وب ۲، سریع، جذاب و کاربردی</h1>
        <p className="intro-description">
        در این دوره، با مفاهیم پیشرفته طراحی وب، ساخت رابط کاربری حرفه‌ای، برنامه‌نویسی با جاوااسکریپت و ری‌اکت و ارتباط با سرور آشنا می‌شوید.
این دوره کاملاً پروژه‌محور است و به شما کمک می‌کند تا یک وب‌سایت پویا و مدرن را از ابتدا تا انتها پیاده‌سازی کنید.
        </p>

        <div className="intro-buttons">
          <button className="gold-btn">مشاهده دوره</button>
          <button className="outline-btn">دریافت مشاوره</button>
        </div>

        <div className="intro-stats">
          <div>
            <FaUserGraduate size={24} color="#c9a849" />
            <strong>۴۲۴+</strong>
            <span>دانشجو</span>
          </div>
          <div>
            <FaClock size={24} color="#c9a849" />
            <strong>۳۵+</strong>
            <span>ساعت آموزش</span>
          </div>
          <div>
            <FaTasks size={24} color="#c9a849" />
            <strong>۱۱۵+</strong>
            <span>تمرین تخصصی</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
