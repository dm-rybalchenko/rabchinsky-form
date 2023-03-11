import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { showPopup } from '../../store/reducers/popupReducer';
import Button from '../UI/button/Button';

import stl from './Feedback.module.scss';


function Feedback(): JSX.Element {
  const dispatch = useDispatch();
  const { feedback } = useTypedSelector((state) => state.feedback);
  const [feedbackJson, setFeedbackJson] = useState<string>('');

  useEffect(() => {
    feedback && setFeedbackJson(JSON.stringify(feedback, null, 2));
  }, [feedback]);

  return (
    <div className={stl.container}>
      <div className={stl.btn}>
        <Button
          onClick={(): void => {
            dispatch(showPopup());
          }}
        >
          Открыть форму
        </Button>
      </div>
      <h2 className={stl.title}>Фидбек:</h2>
      <pre className={stl.json}>
        {feedbackJson ? feedbackJson : 'Отправьте форму, чтобы увидеть фидбек'}
      </pre>
    </div>
  );
}

export default Feedback;
