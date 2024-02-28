import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StudentContent from '../../components/StudentContent';
import StudentInfo from '../../components/StudentInfo';

const ManageStudent = () => {
  const style = {
    display: "flex",
    gap: "100px",
  };

  return (
    <div>
      <Header/>
      <div style={style}>
        <StudentInfo/>
        <StudentContent/>
      </div>
      <Footer/>
    </div>
  );
}

export default ManageStudent