import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface ITeacher {
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface ITeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Price/hour
          <strong>{`US$/hour ${teacher.cost}`}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
