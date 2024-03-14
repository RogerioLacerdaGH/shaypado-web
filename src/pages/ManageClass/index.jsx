import ClassEdit from '../../components/ClassEdit';
import Header from '../../components/Header';
import ListClassStudents from '../../components/ListClassStudents';
import ListTrainingStudents from '../../components/ListTrainingStudents/index';
import TrainingEdit from '../../components/TrainingEdit';

const ManageClass = () => {
  const style = {
    display: "flex",
    gap: "1rem",
  };

  return (
    <div>
      <Header />
      <div style={style}>
        <ListClassStudents />
        <ClassEdit />
      </div>
    </div>
  );
}

export default ManageClass