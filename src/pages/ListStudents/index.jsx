import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Search from '../../components/Search';
import StudentCards from '../../components/StudentCards';

const ListStudents = () => {
  return(
    <div>
      <Header/>
      <Search/>
      <StudentCards/>
      <Footer/>
    </div>
  );
}

export default ListStudents