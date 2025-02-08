import {ApiUrl, CallApiUtilities, MomentUtilities, ToastContext} from '@utils';
import {useContext, useState} from 'react';
import {IInvoice} from '../type/Invoice.type';

export const useAddInvoice = () => {
  const {showToast} = useContext(ToastContext);

  const [newData, setNewData] = useState<IInvoice>({});
  const [loadingSave, setLoadingSave] = useState(false);

  const onChangeValue = async (field: keyof IInvoice, value: any) => {
    setNewData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const onCreate = async () => {
    setLoadingSave(true);
    const res = await CallApiUtilities.post(ApiUrl.addInvoice, {
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
