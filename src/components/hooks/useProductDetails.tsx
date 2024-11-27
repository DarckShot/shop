import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { ProductDetailsHook } from '../types.ts';

const useProductDetails = (): ProductDetailsHook => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  // Проверка на undefined перед использованием parseInt
  const product = id
    ? products.find((p) => p.id === parseInt(id, 10))
    : undefined;

  const handleGoBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  return {
    id,
    product,
    handleGoBack,
  };
};

export default useProductDetails;
