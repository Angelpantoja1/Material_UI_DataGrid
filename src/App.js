import logo from './logo.svg';
import './App.css';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [test, setTest] = useState([]);

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection onSelectionModelChange={ (e) => setTest(e)}/>
      {test.toString()}
      <Button disabled={test.length ===0 ? true: false} >Click</Button>
    </div>
  );
}

export default App;
