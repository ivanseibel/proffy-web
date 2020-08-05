import React, { useState, useCallback } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

interface IScheduleItem {
  week_day: number | null;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([
    { week_day: null, from: '', to: '' },
  ]);

  const addNewScheduleItem = useCallback(
    (scheduleItem: IScheduleItem) => {
      setScheduleItems([...scheduleItems, scheduleItem]);
    },
    [scheduleItems],
  );

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="What amazing you want to teach!"
        description="The first step is fill this subscribe form"
      />

      <main>
        <fieldset>
          <legend>Your data</legend>

          <Input label="Full name" name="name" />

          <Input label="Avatar" name="avatar" marginTop="1.4rem" />

          <Input label="Whatsapp" name="whatsapp" marginTop="1.4rem" />

          <TextArea label="Bio" name="bio" marginTop="1.4rem" />
        </fieldset>

        <fieldset>
          <legend>About the class</legend>

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

          <Input
            label="Cost (US$/hour)"
            type="number"
            name="cost"
            marginTop="1.4rem"
          />
        </fieldset>

        <fieldset>
          <legend>
            Available times
            <button
              type="button"
              onClick={() => {
                addNewScheduleItem({
                  week_day: null,
                  from: '',
                  to: '',
                });
              }}
            >
              + New time
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => (
            <div className="schedule-item" key={String(index)}>
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

              <Input name="from" label="From" type="time" marginTop="1.4rem" />
              <Input name="to" label="To" type="time" marginTop="1.4rem" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important warning" />
            Important!
            <br />
            Fill all data
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
