// ProductList.tsx
import React, { useState } from 'react';
import {
  Typography,
  Grid,
  CircularProgress,
  Container,
  Box,
} from '@mui/material';
import { products } from '../data/products';
import SearchBar from './SearchBar';
import ProductListItem from './ProductListItem';

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Имитация задержки загрузки данных (чтобы можно было увидеть процесс загрузки)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (products.length > 0) {
        setLoading(false);
      }
    }, 2000); // Задержка в 2 секунды

    return () => clearTimeout(timer);
  }, [products]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container style={{ padding: '4rem' }}>
      <Box mb={4}>
        <Typography variant="h4" fontWeight={'bold'}>
          Список товаров
        </Typography>
      </Box>
      <Box mb={4}>
        <SearchBar onSearch={setSearchTerm} />
      </Box>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductListItem product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
