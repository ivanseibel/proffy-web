import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm: React.FC = () => {
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

          <Input label="Avatar" name="avatar" />

          <Input label="Whatsapp" name="whatsapp" />
        </fieldset>

        <fieldset>
          <legend>About the class</legend>

          <Input label="Subject" name="subject" />

          <Input label="Hour/class cost" name="cost" />
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
