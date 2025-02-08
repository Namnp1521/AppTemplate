import {ApiUrl, CallApiUtilities, useAppDispatch} from '@utils';
import {useEffect, useState} from 'react';
import {IProduct} from '../type/Home.type';
import {HomeActions} from '../reducer/Home.reducer';

export const ProductsDemo: IProduct[] = [];

export const initHome = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPoducts();
  }, []);

  const getPoducts = async () => {
    setLoading(true);
    const products = await CallApiUtilities.get(ApiUrl.productList);
    dispatch(HomeActions.initProducts(products?.products || []));
    setLoading(false);
  };

  return {loading};
};

export const useSearch = () => {
  const [searchText, setSearchText] = useState('');

  return {searchText, onChangeValue: setSearchText};
};

export const useCategories = () => {
  const allCategories = ['All', 'Incoming', 'Inbound', 'Outgoing'];

  const [categoriSelected, setCategoriSelected] = useState('All');

  return {allCategories, categoriSelected, onChangeValue: setCategoriSelected};
};
