import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../redux/operations';
import {
  selectCars,
  selectIsLastPage,
  selectIsLoading,
} from '../redux/selectors';
import CarsGrid from 'components/CarsGrid/CarsGrid';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import FilterBar from 'components/FilterBar/FilterBar';
import Spiner from 'components/Spiner/Spiner';
import { HomeP } from './HomePage/HomePage.styled';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const carsInfo = useSelector(selectCars);

  const [params, setParams] = useState({ page: 1 });

  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCars({ ...params }));
  }, [dispatch, params]);

  const onLoadMore = () => setParams({ ...params, page: params.page + 1 });

  const isNeedLoadMoreButton = !isLastPage && !isLoading && carsInfo.length > 0;

  const isCarsFound = carsInfo.length > 0;

  return (
    <>
      <FilterBar params={params} setParams={setParams} />
      {isCarsFound ? (
        <CarsGrid cars={carsInfo} />
      ) : (
        <HomeP>
          Sorry. No cars found matching the search settings. Try changing your
          search parameters...
        </HomeP>
      )}

      {isLoading && <Spiner />}
      {isNeedLoadMoreButton && <LoadMoreButton onClick={onLoadMore} />}
    </>
  );
}
