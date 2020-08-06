import React, { useState, useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

interface IScheduleItem {
  week_day: number | null;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([
    { week_day: 0, from: '', to: '' },
  ]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const history = useHistory();

  const addNewScheduleItem = useCallback(
    (scheduleItem: IScheduleItem) => {
      setScheduleItems([...scheduleItems, scheduleItem]);
    },
    [scheduleItems],
  );

  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const data = {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule: scheduleItems,
      };

      api
        .post('classes', data)
        .then(() => {
          toast.success('Class registered with success!');
          history.push('/');
        })
        .catch(error => {
          toast.error(`The is an erro submitting class data: ${error.message}`);
        });
    },
    [avatar, bio, cost, history, name, scheduleItems, subject, whatsapp],
  );

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const newScheduleItems = scheduleItems.slice();
      newScheduleItems[position] = {
        ...newScheduleItems[position],
        [field]: value,
      };
      setScheduleItems(newScheduleItems);
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
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>

            <Input
              label="Full name"
              name="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />

            <Input
              label="Avatar"
              name="avatar"
              marginTop="1.4rem"
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
              marginTop="1.4rem"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />

            <TextArea
              label="Bio"
              name="bio"
              marginTop="1.4rem"
              value={bio}
              onChange={e => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

            <Select
              label="Subject"
              name="subject"
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
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
              value={cost}
              onChange={e => {
                setCost(e.target.value);
              }}
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
                    week_day: 0,
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
                  onChange={e => {
                    setScheduleItemValue(index, 'week_day', e.target.value);
                  }}
                  value={String(scheduleItems[index].week_day)}
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
                  name="from"
                  label="From"
                  type="time"
                  marginTop="1.4rem"
                  value={scheduleItems[index].from}
                  onChange={e => {
                    setScheduleItemValue(index, 'from', e.target.value);
                  }}
                />
                <Input
                  name="to"
                  label="To"
                  type="time"
                  marginTop="1.4rem"
                  value={scheduleItems[index].to}
                  onChange={e => {
                    setScheduleItemValue(index, 'to', e.target.value);
                  }}
                />
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
            <button type="submit">Save</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
