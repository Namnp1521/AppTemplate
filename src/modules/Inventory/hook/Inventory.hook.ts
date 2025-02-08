import {
  ApiUrl,
  CallApiUtilities,
  MomentUtilities,
  ToastContext,
  useAppDispatch,
} from '@utils';
import {useContext, useEffect, useState} from 'react';
import {IInventory} from '../type/Inventory.type';
import {InventoryActions} from '../reducer/Inventory.reducer';

export const initInventory = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInventories();
  }, []);

  const getInventories = async () => {
    setLoading(true);
    const data = await CallApiUtilities.get(ApiUrl.inventryList);
    dispatch(InventoryActions.initInventory(data?.inventories || []));
    setLoading(false);
  };

  return {loading};
};

export const useAddInventory = () => {
  const dispatch = useAppDispatch();
  const {showToast} = useContext(ToastContext);

  const [newInventory, setNewInventory] = useState<IInventory>({});
  const [loadingSave, setLoadingSave] = useState(false);

  const onChangeValue = async (field: keyof IInventory, value: any) => {
    setNewInventory(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const onCreate = async () => {
    setLoadingSave(true);
    const res = await CallApiUtilities.post(ApiUrl.addInventory, {
      stock_avilable: 'yes',
      date: MomentUtilities.formatDateYYYYMMDD(new Date()),
      ...newInventory,
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
      if (res.data) {
        dispatch(InventoryActions.addInventory(res.data));
      }

      setNewInventory({});
      showToast('Create Successful', 'success');
    }
    setLoadingSave(false);
  };

  return {newInventory, onChangeValue, onCreate, loadingSave};
};
