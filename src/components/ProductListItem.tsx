// ProductListItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { Product } from './types.ts';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <Card
      variant={'outlined'}
      style={{ padding: '5px', margin: 'auto', borderColor: '#333' }}
    >
      <CardContent>
        <Typography variant="h6">
          <Link to={`/product/${product.id}`} style={{ color: '#1976d2' }}>
            {product.name}
          </Link>
        </Typography>
        <Typography>{product.description}</Typography>
        <Typography>Цена: {product.price} руб.</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/product/${product.id}`}>Подробнее</Link>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
