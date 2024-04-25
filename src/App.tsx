import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import { AuthProvider } from './utils/AuthProvider';
import NavbarComponent from './components/navbar';
import LoginPage from './auth/login/page';
import RegisterPage from './auth/register/page';
import CourseDetailPage from './pages/cousreDetail';
import DashboardPage from './admin/dashboard/page';
import Layout from '@/admin/layout';
import CoursesPage from './admin/dashboard/course/page';
import UsersTable from './admin/dashboard/user/page';
import QueryTable from './admin/dashboard/query/page';
import LandingPage from './admin/dashboard/landing/page';
import AddCourseForm from './admin/dashboard/addcourse/page';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/admin/dashboard/*" element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="user" element={<UsersTable />} />
              <Route path="course" element={<CoursesPage />} />
              <Route path="course/addcourse" element={<AddCourseForm />} />

              <Route path="query" element={<QueryTable />} />
              <Route path="landing" element={<LandingPage />} />



            </Route>
            {/* Define more routes as needed */}
          </Routes>
          <Footer/>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
