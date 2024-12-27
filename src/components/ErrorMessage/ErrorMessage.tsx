import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div>
      <p className={css.network_mistake}>
        Opppsss! Please try again!
      </p>
    </div>
  );
}
