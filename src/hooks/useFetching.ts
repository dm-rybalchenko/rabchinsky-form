import { useState } from 'react';


type TFetchingFnc<T> = (...args: T[]) => Promise<void>;
type TCallback<T> = (...args: T[]) => void;
type TCortege<T> = [TFetchingFnc<T>, boolean, boolean, string];

const useFetching = <T>(callback: TCallback<T>): TCortege<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching: TFetchingFnc<T> = async (...args) => {
    try {
      setIsLoading(true);
      setSuccess(false);
      setError('');

      await callback(...args);

      setSuccess(true);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Произошла непредвиденная ошибка');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, success, error];
};

export default useFetching;
