import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <form id="search-teachers">
          <Select
            label="Subject"
            name="subject"
            options={[
              { value: 'Math', label: 'Math' },
              { value: 'English', label: 'English' },
              { value: 'Geography', label: 'Geography' },
              { value: 'Physics', label: 'Physics' },
              { value: 'Biology', label: 'Biology' },
              { value: 'History', label: 'History' },
              { value: 'Chemistry', label: 'Chemistry' },
            ]}
          />

          <Select
            label="Week day"
            name="week_day"
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />

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
