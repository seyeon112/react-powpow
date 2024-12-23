import React, { useState } from 'react';
import S from './style';

const ProductCount = ({product}) => {

  const [count, setCount] = useState(product.productCount)
  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <S.productCount>
      <S.Decrease onClick={decrease}>-</S.Decrease><span>{count}</span><S.Increase onClick={increase}>+</S.Increase>
    </S.productCount>
  );
};

export default ProductCount;