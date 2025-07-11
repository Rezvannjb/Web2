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

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/students/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStudents((prev) => prev.filter((s) => s.id !== id));
      });
  };

  const handleEdit = (id) => {
    const newName = prompt("نام جدید را وارد کنید:");
    if (newName) {
      fetch(`http://localhost:3001/students/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName }),
      })
        .then(() => {
          setStudents((prev) =>
            prev.map((s) => (s.id === id ? { ...s, name: newName } : s))
          );
        });
    }
  };

  const handleAdd = () => {
    const name = prompt("نام دانشجو:");
    const studentId = prompt("شماره دانشجویی:");
    const image = prompt("لینک تصویر:");
    if (name && studentId && image) {
      const newStudent = { name, studentId, image };

      fetch('http://localhost:3001/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent),
      })
        .then((res) => res.json())
        .then((data) => setStudents([...students, data]));
    }
  };

  return (
    <div className="students-list">
      <button className="add-btn" onClick={handleAdd}>افزودن دانشجو</button>
      <div className="students-grid">
        {students.map((item) => (
          <div className="student-card" key={item.id}>
            <div className="student-image-wrapper">
              <img src={item.image} alt={item.name} className="student-image" />
            </div>
            <div className="student-info">
              <h4>{item.name}</h4>
              <p>شماره دانشجویی: {item.studentId}</p>
              <div className="action-buttons">
                <button className="edit-btn" onClick={() => handleEdit(item.id)}>ویرایش</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>حذف</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
