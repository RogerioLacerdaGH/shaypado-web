import Header from '../../components/Header';
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
        <ListTrainingStudents />
        <TrainingEdit />
      </div>
    </div>
  );
}

export default ManageClass