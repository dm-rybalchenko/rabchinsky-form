import { useTypedSelector } from './hooks/useTypedSelector';
import Form from './components/Form/Form';
import Feedback from './components/Feedback/Feedback';
import Popup from './components/Popup/Popup';
import Success from './components/UI/notifications/Success';
import Error from './components/UI/notifications/Error';


function App(): JSX.Element {
  const { error, success } = useTypedSelector((state) => state.notification);
  const { popup } = useTypedSelector((state) => state.popup);

  return (
    <div className="wrapper">
      {error && <Error />}
      {success && <Success />}
      <Feedback />
      {popup && (
        <Popup>
          <Form />
        </Popup>
      )}
    </div>
  );
}

export default App;
