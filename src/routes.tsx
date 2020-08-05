import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import 'react-toastify/dist/ReactToastify.css';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />

      <Route path="/study" component={TeacherList} />
      <Route path="/teach" component={TeacherForm} />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default Routes;
