import React from 'react';
import successIcon from '../images/success.svg';
import failIcon from '../images/fail.svg';

export function InfoTooltip() {
  const [log, setLog] = React.useState(false);

  const successText = 'Вы успешно зарегистрировались!';
  const failText = 'Что-то пошло не так! Попробуйте ещё раз.';

  return (
    <div className={`popup`}>
      <div className="popup__container">
        <img className="popup__icon" src={log ? successIcon : failIcon} />
        <h2 className="popup__title popup__title_auth">{log ? successText : failText}</h2>
        <button className="popup__close-btn"  type="button" aria-label="Кнопка закрыть"></button>
      </div>
    </div>
  )
}
