import StudentCard from './StudentCard';
import '../styles/StudentsList.css';


const StudentsList = () => (
  <section className="students-grid">
    <h3 className="text-2xl font-semibold mb-4">دانشجویان شرکت‌کننده</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <StudentCard />
    </div>
  </section>
);

export default StudentsList;
