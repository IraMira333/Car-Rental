import { CARSBRANDARRAY } from 'constants/CARSBRANDARRAY';
import { Formik, useField, useFormik } from 'formik';
import { createArrayWithStep } from '../../helpers/helpers';
import {
  FilterItemBox,
  FilterLineBox,
  FormBox,
  FormattedMileage,
  FormattedPriceBox,
  InputMileage,
  Label,
  MileageBox,
  MileageWrapper,
  SearchButton,
  SelectField,
} from './FilterBar.styled';
import CustomSelect from './Select/Select';
import { useState } from 'react';

const brandOptions = CARSBRANDARRAY.map(make => ({
  value: make,
  label: make,
}));

const prices = createArrayWithStep(30, 550, 10);
const priceOptions = prices.map(price => ({
  value: price,
  label: price,
}));

const FilterBar = ({ params, setParams }) => {
  const formik = useFormik({
    initialValues: {
      make: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
    },
    onSubmit: values => {
      setParams({ ...params, ...values, page: 1 });
    },
  });

  function NumberFieldHooks(props) {
    const { name } = props;
    const [field] = useField(name);

    return (
      <FormattedMileage
        {...field}
        decimalScale={3}
        thousandSeparator={true}
        onValueChange={values => {
          const { floatValue } = values;

          formik.setFieldValue(field.name, floatValue);
        }}
      />
    );
  }

  const [formattedPrice, setFormattedPrice] = useState('To $');

  return (
    <FilterLineBox>
      <Formik
        onSubmit={formik.handleSubmit}
        initialValues={formik.initialValues}
      >
        <FormBox>
          <FilterItemBox>
            <label htmlFor="make">Car brand</label>
            <SelectField
              style={{
                width: 'var(--width-brand)',
              }}
              className="brand"
            >
              <CustomSelect
                placeholder={'All'}
                options={brandOptions}
                value={formik.values.make}
                onChange={value => formik.setFieldValue('make', value.value)}
              />
            </SelectField>
          </FilterItemBox>

          <FilterItemBox>
            <label htmlFor="price">Price/ 1 hour</label>
            <SelectField
              style={{
                width: 'var(--width-price)',
                position: 'relative',
              }}
            >
              <CustomSelect
                placeholder={'To $'}
                options={priceOptions}
                value={formik.values.price}
                onChange={value => {
                  const newPrice = `To ${value.value}$`;
                  setFormattedPrice(newPrice);
                  formik.setFieldValue('price', value.value);
                }}
              />
              <FormattedPriceBox>{formattedPrice}</FormattedPriceBox>
            </SelectField>
          </FilterItemBox>

          <FilterItemBox>
            <label htmlFor="mileage">Сar mileage / km</label>
            <MileageBox>
              <MileageWrapper>
                <Label>From</Label>
                <InputMileage
                  style={{
                    paddingLeft: 'var(--paddingLeft-From)',
                  }}
                >
                  <NumberFieldHooks
                    name="mileageFrom"
                    type="number"
                    min="0"
                    value={formik.values.mileageFrom}
                  />
                </InputMileage>
              </MileageWrapper>
              <MileageWrapper>
                <Label>To</Label>
                <InputMileage
                  style={{
                    paddingLeft: 'var(--paddingLeft-To)',
                  }}
                >
                  <NumberFieldHooks
                    name="mileageTo"
                    type="number"
                    min="0"
                    value={formik.values.mileageTo}
                  />
                </InputMileage>
              </MileageWrapper>
            </MileageBox>
          </FilterItemBox>

          <SearchButton type="submit">Search</SearchButton>
        </FormBox>
      </Formik>
    </FilterLineBox>
  );
};

export default FilterBar;
