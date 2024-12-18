"use client"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const BasicSelect = () => {
const [value, setValue] = useState("")
const handleChange = (newValue) => {
    setValue(newValue)
}

  return (
    <div className='flex justify-end'>
    <FormControl className='w-48'>
    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label="Filter"
    onChange={handleChange}
  >
    <MenuItem value="sale">Sale</MenuItem>
    <MenuItem value="lth">$ Low to high</MenuItem>
    <MenuItem value="htl">$ High to low</MenuItem>
  </Select>
    </FormControl>
    </div>
  )
}

export default BasicSelect