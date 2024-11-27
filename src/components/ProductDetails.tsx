import React from 'react';
import { Container, Box } from '@mui/material';
import ProductCard from './ProductCard';
import useProductDetails from './hooks/useProductDetails.tsx';

const ProductDetails: React.FC = () => {
  const { id, product, handleGoBack } = useProductDetails();

  if (!id || !product) {
    return <div>Товар не найден</div>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Container maxWidth={'md'} style={{ margin: 'auto' }}>
        <ProductCard product={product} onGoBack={handleGoBack} />
      </Container>
    </Box>
  );
};

export default ProductDetails;
