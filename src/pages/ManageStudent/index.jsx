import Header from '../../components/Header';
import StudentContent from '../../components/StudentContent';
import StudentInfo from '../../components/StudentInfo';

const ManageStudent = () => {
  const style = {
    display: "flex",
    gap: "1rem",
  };

  return (
    <div>
      <Header />
      <div style={style}>
        <StudentInfo />
        <StudentContent />
      </div>
    </div>
  );
}

export default ManageStudent