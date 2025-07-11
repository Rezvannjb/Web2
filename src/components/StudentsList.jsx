import StudentCard from './StudentCard';
import '../styles/StudentsList.css';

const StudentsList = () => (
  <section className="students-list">
    <h3 className="section-title">دانشجویان شرکت‌کننده</h3>
    <StudentCard />
  </section>
);

export default StudentsList;
