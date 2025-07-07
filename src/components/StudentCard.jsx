import { useEffect, useState } from 'react';
import '../styles/StudentCard.css';

const StudentCard = () => {
  const [students, setStudents] = useState([]);
  const [instructor, setInstructor] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));

    fetch('http://localhost:3001/instructor')
      .then((res) => res.json())
      .then((data) => setInstructor(data.name));
      
    }, []);
    console.log(students);
  return (
    <div className="students-list">
      <h3>مدرس: {instructor}</h3>
      <div className="students-grid">
        {students.map((item) => (
          <div className="student-card" key={item.id}>
            <h4>{item.name}</h4>
            <p>شماره دانشجویی: {item.studentId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
