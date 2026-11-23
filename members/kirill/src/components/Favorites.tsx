import film from '../../images/film.jpg';
import sport from '../../images/sport.jpg';
import styles from '../App.module.css';

const favorites = [
  { label: 'Фильм', title: 'Криминальное чтиво', image: film,
    alt: 'Кадр из фильма «Криминальное чтиво»', text: 'Фильм Квентина Тарантино 1994 года.' },
  { label: 'Спорт', title: 'Футбол', image: sport, alt: 'Футболист с кубком после финала',
    text: 'Занимался футболом почти всю школьную жизнь: стал серебряным призёром первенства России и даже попал на просмотр в академию ЦСКА, но, к сожалению, не сложилось. Ещё люблю смотреть большой теннис и хотел бы попробовать поиграть сам.' },
  { label: 'Музыка', title: 'Любимые исполнители',
    text: 'Kanye West, Drake, Future, Nemzzz, A$AP Rocky.' },
];

export default function Favorites() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.section__title}>Мои увлечения</h2>
        <div className={styles.tags}>
          {['Программирование', 'Спорт', 'Музыка', 'Кино'].map(hobby => (
            <span className={styles.tags__item} key={hobby}>{hobby}</span>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.section__title}>Любимое</h2>
        <div className={styles.favorites}>
          {favorites.map(favorite => (
            <article className={styles.favorite} key={favorite.label}>
              {favorite.image && <img className={styles.favorite__image} src={favorite.image} alt={favorite.alt} />}
              <p className={styles.favorite__label}>{favorite.label}</p>
              <h3 className={styles.favorite__title}>{favorite.title}</h3>
              <p className={styles.favorite__text}>{favorite.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
