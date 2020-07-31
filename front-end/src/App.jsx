import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Filters from './components/Filters';

import './App.css';


function App() {
  const [ state, setState ] = useState({
    sortBy: 'in_frame',
    order: 'asc',
    filterLocation: '',
    pageNumber: 1,
    pageSize: 10,
    lastPage: 0,
  });
  
  useEffect (() => {
    const {
      sortBy,
      order,
      filterLocation,
      pageNumber,
      pageSize,
    } = state;

    axios.get('/data', {
      params: {
        sortBy,
        order,
        filterLocation,
        pageNumber,
        pageSize,
      },
    })
      .then((res) => {
        const { data, lastPage } = res.data;

        setState({
          ...state,
          data,
          lastPage,
        });
      });
  }, [
    state.sortBy,
    state.order,
    state.filterLocation,
    state.pageNumber,
    state.pageSize
  ]);

  const setSortBy = (sortBy) => {
    setState({
      ...state,
      sortBy,
      order: state.order === 'asc' ? 'desc' : 'asc', 
    });
  }

  const nextPage = () => {
    if (state.pageNumber + 1 < state.lastPage) {
      setState({
        ...state,
        pageNumber: state.pageNumber + 1,
      });
    }
  }

  const prevPage = () => {
    if (state.pageNumber - 1 >= 1) {
      setState({
        ...state,
        pageNumber: state.pageNumber - 1,
      });
    }
  }

  const selectPage = (pageNumber) => {
    setState({
      ...state,
      pageNumber,
    })
  }

  const setFilter = (event) => {
    setState({
      ...state,
      filterLocation: event.target.value,
    });
  }

  return (
    <div className="App">
      <Filters setFilter={setFilter}/>
      <Table data={state.data} setSortBy={setSortBy} />
      <Pagination
        currentPage={state.pageNumber}
        nextPage={nextPage}
        prevPage={prevPage}
        selectPage={selectPage}
      />
    </div>
  );
}

export default App;
