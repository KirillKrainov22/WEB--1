import { useState } from 'react';
import photo from '../../images/photo.jpg';
import styles from '../App.module.css';

export default function Profile() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={styles.profile} aria-labelledby="profile-name">
      <img className={styles.profile__photo} src={photo} alt="Фото: Кирилл Крайнов" />
      <div>
        <h1 className={styles.profile__name} id="profile-name">Кирилл Крайнов</h1>
        <p className={styles.profile__text}>Учусь в НИУ ВШЭ. Люблю программирование, спорт и музыку.</p>
        <button className={styles.button} id="more-button" type="button"
          aria-expanded={expanded} aria-controls="more-text" onClick={() => setExpanded(value => !value)}>
          {expanded ? 'Скрыть' : 'Подробнее'}
        </button>
        <p className={styles.more} id="more-text" hidden={!expanded}>
          Работаю iOS-разработчиком в Яндекс Музыке. Фронтенд раньше не изучал — максимум писал
          HTML и CSS в школе, поэтому интересно познакомиться с вебом поближе.
        </p>
      </div>
    </section>
  );
}
