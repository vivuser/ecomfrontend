"use client"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const BasicSelect = ({ filterValue, onFilterChange  }) => {
const [value, setValue] = useState(filterValue)
const handleChange = (e) => {
  const newValue = e.target.value
    setValue(newValue)
    onFilterChange(newValue)
}

console.log(filterValue, 'filter value')

console.log(value, 'xxxvalue')

  return (
    <div className='flex justify-end'>
    <FormControl className='w-48'>
    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label="Filter"
    onChange={(e) => handleChange(e)}
  >
    <MenuItem value="sale">Sale</MenuItem>
    <MenuItem value="lowToHigh">$ Low to high</MenuItem>
    <MenuItem value="highToLow">$ High to low</MenuItem>
  </Select>
    </FormControl>
    </div>
  )
}

export default BasicSelect



















// completeAfter: selectedDeliverySlot?.slot?.start ? moment(selectedDeliverySlot?.slot?.start, 'HH:mm').tz('America/Los_Angeles').add(isThanksGivingDay || isChristmasDay ? 2 : 1, 'days').format('x') : 0,
//   deliveryDate: selectedDeliverySlot?.slot?.end ? moment(selectedDeliverySlot?.slot?.end, 'HH:mm').tz('America/Los_Angeles').add(isThanksGivingDay || isChristmasDay ? 2 : 1, 'days').format('x') : 0,





// date issue : => 
//   completeAfter: selectedDeliverySlot?.slot?.start ? moment.tz(selectedDeliverySlot?.slot?.start, 'HH:mm','America/Los_Angeles').add(isThanksGivingDay || isChristmasDay ? 2 : 1, 'days').format('x') : 0,
//             deliveryDate: selectedDeliverySlot?.slot?.end ? moment.tz(selectedDeliverySlot?.slot?.end, 'HH:mm','America/Los_Angeles').add(isThanksGivingDay || isChristmasDay ? 2 : 1, 'days').format('x') : 0,



//             completeAfter: selectedDeliverySlot?.slot?.start ? moment(selectedDeliverySlot?.slot?.start, 'HH:mm').tz('America/Los_Angeles').add(isThanksGivingDay || isChristmasDay ? 2 : 1, 'days').format('x') : 0,
//             deliveryDate: selectedDeliverySlot?.slot?.end ? moment(selectedDeliverySlot?.slot?.end, 'HH:mm').tz('America/Los_Angeles').add(isThanksGivingDay || isChristmasDay ? 2 : 1, 'days').format('x') : 0,