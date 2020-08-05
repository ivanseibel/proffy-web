import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <form id="search-teachers">
          <Input label="Subject" name="subject" />

          <Input label="Week day" name="week_day" />

          <Input label="Time" type="time" name="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem key="1" />
        <TeacherItem key="2" />
        <TeacherItem key="3" />
      </main>
    </div>
  );
};

export default TeacherList;
