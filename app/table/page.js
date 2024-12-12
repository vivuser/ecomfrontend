"use client"; // For Next.js client-side rendering

import React, { useState } from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, CheckBox } from '@mui/icons-material';
import { dataNew } from '../utilities/common'; // Assuming 'dataNew' is an array of objects

const Table = () => {
  // State to keep track of expanded rows
  const [expandedRows, setExpandedRows] = useState({});

  // Handle toggling of expanded rows
  const handleRowToggle = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],  // Toggle the expansion state of the row
    }));
  };

  return (
    <TableContainer>
      <table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell> {/* Empty cell for the expand/collapse icon */}
            <TableCell><CheckBox /></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataNew.map((row, index) => (
            <React.Fragment key={index}>
              {/* Main Row */}
              <TableRow>
                <TableCell>
                  <IconButton onClick={() => handleRowToggle(index)}>
                    {expandedRows[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell><CheckBox /></TableCell>
                <TableCell>{row.taskName}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>

              {/* Subtasks - Collapsible */}
              {expandedRows[index] && row.subTasks && row.subTasks.map((sub, subIndex) => (
                <TableRow key={subIndex}>

                    {/* Render subtask information */}
                    <TableCell><CheckBox /></TableCell>
                    <TableCell>{sub.subTaskName}</TableCell>

                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </table>
    </TableContainer>
  );
};

export default Table;
