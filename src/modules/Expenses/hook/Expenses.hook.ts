import {ApiUrl, CallApiUtilities, ToastContext} from '@utils';
import {useContext, useState} from 'react';
import {IExpense} from '../type/Expenses.type';

export const useAddExpense = () => {
  const {showToast} = useContext(ToastContext);

  const [newData, setNewData] = useState<IExpense>({});
  const [loadingSave, setLoadingSave] = useState(false);

  const onChangeValue = async (field: keyof IExpense, value: any) => {
    setNewData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const onCreate = async () => {
    setLoadingSave(true);
    const res = await CallApiUtilities.post(ApiUrl.addExpense, {
      createdAt: new Date().toISOString(),
      ...newData,
    });
    const errors = res?.data?.errors || res?.errors;
    if (!!errors) {
      showToast(
        `Error:\n${Object.keys(errors)
          .map(x => errors[x])
          .join('\n')}`,
        'error',
      );
    } else {
      setNewData({});
      showToast('Create Successful', 'success');
    }
    setLoadingSave(false);
  };

  return {newData, onChangeValue, onCreate, loadingSave};
};
