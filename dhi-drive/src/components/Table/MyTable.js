
import { React, useEffect, useState } from 'react';
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
import {
  useQuery,
  gql
} from "@apollo/client";



const WATER_INFOS = gql`
query{
  waterInfos {
    location
    tank1
    tank2
    tank3
    tank4
  }    
} 
`;


const useStyles = makeStyles({
  table: {
    width: 950,
  },
});


export default function MyTable() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(WATER_INFOS);


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
          {data?.waterInfos.map((row) => (
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
      
      {/* <CSVLink data={data}
      filename={"waterinfo.csv"}
      target="_blank"
      > <Button/> 
      </CSVLink> */}
    </TableContainer>

  );
}

