import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Week day</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
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
