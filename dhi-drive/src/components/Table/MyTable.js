
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CSVLink} from 'react-csv'
import Button from '../Download/Button';


const useStyles = makeStyles({
  table: {
    width: 950,
  },
});

function createData(location, tank1, tank2, tank3, tank4) {
  return { location, tank1, tank2, tank3, tank4 };
}

const rows = [
  createData('Tech Park', 15, 6.0, 5.0, 4.0),
  createData('Sangaygang', 2.0, 9.0, 7, 4.3),
  createData('Lungtenphug', 6.0, 16.0, 14, 6.0),
  createData('Taba', 5.0, 3.7, 7, 4.3),
  createData('Kabesa', 6, 16.0, 9, 3.9),
];


export default function MyTable() {
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="right">Tank 1&nbsp;(L)</TableCell>
            <TableCell align="right">Tank2&nbsp;(L)</TableCell>
            <TableCell align="right">Tank3&nbsp;(L)</TableCell>
            <TableCell align="right">Tank4&nbsp;(L)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell align="right">{row.tank1}</TableCell>
              <TableCell align="right">{row.tank2}</TableCell>
              <TableCell align="right">{row.tank3}</TableCell>
              <TableCell align="right">{row.tank4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <CSVLink data={rows}
      filename={"waterinfo.csv"}
      target="_blank"
      > <Button/> 
      </CSVLink>
    </TableContainer>

  );
}

