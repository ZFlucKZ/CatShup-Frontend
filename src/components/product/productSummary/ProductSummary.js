import React, { useEffect } from 'react';
import './ProductSummary.scss';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsCart4, BsCartX } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import InfoBox from '../../infoBox/InfoBox';
import { useDispatch, useSelector } from 'react-redux';
import {
  CALC_CATEGORY,
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectCategory,
  selectOutOfStock,
  selectTotalStoreValue,
} from '../../../redux/features/product/productSlice';

// Icons
const earningIcon = <AiFillDollarCircle size={40} color="white" />;
const productIcon = <BsCart4 size={40} color="white" />;
const categoryIcon = <BiCategory size={40} color="white" />;
const outOfStockIcon = <BsCartX size={40} color="white" />;

// Format Amount
// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const totalOutOfStock = useSelector(selectOutOfStock);
  const totalCategories = useSelector(selectCategory);

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
    dispatch(CALC_OUTOFSTOCK(products));
    dispatch(CALC_CATEGORY(products));
  }, [dispatch, products]);

  return (
    <div className="product-summary">
      <h3 className="--mt">Inventory Stats</h3>
      <div className="info-summary">
        <InfoBox
          icon={productIcon}
          title={'Total Product'}
          count={products.length}
          bgColor="card1"
        />
        <InfoBox
          icon={earningIcon}
          title={'Total Value'}
          count={formatter.format(totalStoreValue)}
          bgColor="card2"
        />
        <InfoBox
          icon={outOfStockIcon}
          title={'Out of Stock'}
          count={totalOutOfStock}
          bgColor="card3"
        />
        <InfoBox
          icon={categoryIcon}
          title={'All Categories'}
          count={totalCategories.length}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default ProductSummary;
