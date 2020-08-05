import React, { useState, useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [classes, setClasses] = useState<ITeacher[]>([]);

  const searchTeachers = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const filterIsIncomplete =
        subject === '' || week_day === '' || time === '';

      if (filterIsIncomplete) {
        toast.error(
          'Your must provide subject, week day and time to search by teachers',
        );
        return;
      }

      const params = {
        week_day,
        subject,
        time,
      };
      api
        .get<ITeacher[]>('classes', {
          params,
        })
        .then(response => {
          if (response.data.length === 0) {
            toast.info('No classes found');
          }
          setClasses(
            response.data.map(item => {
              return {
                ...item,
                avatar: item.avatar
                  ? item.avatar
                  : `https://api.adorable.io/avatars/80/${item.name}.png`,
              };
            }),
          );
        })
        .catch(error => {
          toast.error(
            `There is an error getting classes list: ${error.message}`,
          );
        });
    },
    [subject, time, week_day],
  );

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            label="Subject"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
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

          <Input
            label="Time"
            type="time"
            name="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </PageHeader>

      <main>
        {classes.map((item, index) => (
          <TeacherItem teacher={item} key={index} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
