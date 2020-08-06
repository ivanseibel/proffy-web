import React, { useCallback } from 'react';

import './styles.css';

import { toast } from 'react-toastify';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface ITeacher {
  user_id: string;
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
  const createConnection = useCallback(() => {
    api.post('connections', { user_id: teacher.user_id }).catch(error => {
      toast.error(`There is an error while contacting teacher: ${error}`);
    });
  }, [teacher.user_id]);

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
        <a
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
