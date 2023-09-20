import { useState } from 'react';
import { modelData, priceData } from 'components/constants/dataConstants';
import {
  ButtonFilter,
  DropDown,
  DropdownItem,
  DropdownList,
  DropDownPrice,
  FormFilter,
  InputFrom,
  InputTo,
  InputWrap,
  LabelFilter,
  LabelMileage,
  Select,
  SelectPrice,
} from './Filter.styled';
import iconDown from 'images/iconDown.svg';
import iconUp from 'images/iconUp.svg';
import { useDispatch } from 'react-redux';

import { setValueFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const [selectedBrand, setSelectedBrand] = useState('Enter the text');
  const [isShownSelectBrand, setShownSelectBrand] = useState(false);
  const [isShownSelectPrice, setShownSelectPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('To $');
  const [selectedFromMileage, setSelectedFromMileage] = useState('');
  const [selectedToMileage, setSelectedToMileage] = useState('');
  const dispatch = useDispatch();

  const handleShownSelectedBrand = e => {
    e.preventDefault();
    setShownSelectBrand(prev => !prev);
  };

  const handleShownSelectedPrice = e => {
    e.preventDefault();
    setShownSelectPrice(prev => !prev);
  };
  const changeBrand = brand => {
    setSelectedBrand(brand);
    setShownSelectBrand(false);
  };
  const changePrice = price => {
    setSelectedPrice(price + ' $');
    setShownSelectPrice(false);
  };

  const handleInputChangeFrom = e => {
    const { value } = e.target;
    setSelectedFromMileage(value.replace(/,/g, ''));
  };

  const handleInputChangeTo = e => {
    const { value } = e.target;
    setSelectedToMileage(value.replace(/,/g, ''));
  };

  const handleFilterSubmit = e => {
    e.preventDefault();
    if (
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      !selectedFromMileage &&
      !selectedToMileage
    ) {
      return;
    }
    const data = {
      brand: selectedBrand === 'Enter the text' ? '' : selectedBrand,
      price: selectedPrice === 'To $' ? '' : `$${parseInt(selectedPrice, 10)}`,
      mileageFrom: selectedFromMileage.trim(),
      mileageTo: selectedToMileage.trim(),
      onFilter: true,
    };
    dispatch(setValueFilter(data));
  };

  const handleFilterClear = e => {
    e.preventDefault();
    const data = {
      brand: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
      onFilter: false,
    };

    dispatch(setValueFilter(data));
    setSelectedBrand('Enter the text');
    setSelectedPrice('To $');
    setSelectedFromMileage('');
    setSelectedToMileage('');
  };

  return (
    <FormFilter>
      <div>
        <LabelFilter>Car brand</LabelFilter>
        <div style={{ position: 'relative' }}>
          <Select onClick={handleShownSelectedBrand}>
            {selectedBrand}
            {isShownSelectBrand ? (
              <svg>
                <use href={iconUp + '#up'}></use>
              </svg>
            ) : (
              <svg>
                <use href={iconDown + '#down'}></use>
              </svg>
            )}
          </Select>
          {isShownSelectBrand && (
            <DropDown>
              <DropdownList>
                {modelData.map(el => (
                  <DropdownItem key={el} onClick={() => changeBrand(el)}>
                    {el}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropDown>
          )}
        </div>
      </div>
      <div>
        <LabelFilter>Price/ 1 hour</LabelFilter>
        <div style={{ position: 'relative' }}>
          <SelectPrice onClick={handleShownSelectedPrice}>
            {selectedPrice}
            {isShownSelectPrice ? (
              <svg>
                <use href={iconUp + '#up'}></use>
              </svg>
            ) : (
              <svg>
                <use href={iconDown + '#down'}></use>
              </svg>
            )}
          </SelectPrice>
          {isShownSelectPrice && (
            <DropDownPrice>
              <DropdownList>
                {priceData.map(el => (
                  <DropdownItem key={el} onClick={() => changePrice(el)}>
                    {el}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropDownPrice>
          )}
        </div>
      </div>
      <div>
        <LabelFilter>Сar mileage / km</LabelFilter>
        <div style={{ display: 'flex' }}>
          <InputWrap>
            <InputFrom
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeFrom}
              value={selectedFromMileage}
            />
            <LabelMileage>From</LabelMileage>
          </InputWrap>
          <InputWrap>
            <InputTo
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeTo}
              value={selectedToMileage}
            />
            <LabelMileage>To</LabelMileage>
          </InputWrap>
        </div>
      </div>
      <ButtonFilter onClick={handleFilterSubmit}>Search</ButtonFilter>
      <ButtonFilter onClick={handleFilterClear}>Clear filter</ButtonFilter>
    </FormFilter>
  );
};
