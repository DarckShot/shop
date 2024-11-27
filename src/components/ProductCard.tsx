import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { Product } from './types.ts';

interface ProductCardProps {
  product: Product;
  onGoBack: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onGoBack }) => {
  return (
    <Card
      variant={'outlined'}
      style={{ padding: '30px', margin: 'auto', borderColor: '#333' }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: '250px',
          width: 'auto',
          display: 'block',
          margin: 'auto',
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.fullDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена: {product.price} руб.
        </Typography>
      </CardContent>
      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={onGoBack}>
          Назад
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
