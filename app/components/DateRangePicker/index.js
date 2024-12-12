"use client"
import React, { useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export default function DateRange({ setDateRange, dateRange = [null, null], disabled, readOnly, showIcon }) {
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            isClearable={showIcon ? false : true}
            showIcon
            icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3544 3.26334V1.83334C15.3544 1.4575 15.0428 1.14584 14.6669 1.14584C14.2911 1.14584 13.9794 1.4575 13.9794 1.83334V3.20834H8.02112V1.83334C8.02112 1.4575 7.70946 1.14584 7.33362 1.14584C6.95779 1.14584 6.64612 1.4575 6.64612 1.83334V3.26334C4.17112 3.4925 2.97029 4.96834 2.78696 7.15917C2.76862 7.425 2.98862 7.645 3.24529 7.645H18.7553C19.0211 7.645 19.2411 7.41584 19.2136 7.15917C19.0303 4.96834 17.8294 3.4925 15.3544 3.26334Z" fill="currentColor" />
                    <path d="M18.3333 9.02009H3.66667C3.1625 9.02009 2.75 9.4326 2.75 9.93676V15.5834C2.75 18.3334 4.125 20.1668 7.33333 20.1668H14.6667C17.875 20.1668 19.25 18.3334 19.25 15.5834V9.93676C19.25 9.4326 18.8375 9.02009 18.3333 9.02009ZM8.4425 16.6926C8.39667 16.7293 8.35083 16.7751 8.305 16.8026C8.25 16.8393 8.195 16.8668 8.14 16.8851C8.085 16.9126 8.03 16.9309 7.975 16.9401C7.91083 16.9493 7.85583 16.9584 7.79167 16.9584C7.6725 16.9584 7.55333 16.9309 7.44333 16.8851C7.32417 16.8393 7.2325 16.7751 7.14083 16.6926C6.97583 16.5184 6.875 16.2801 6.875 16.0418C6.875 15.8034 6.97583 15.5651 7.14083 15.3909C7.2325 15.3084 7.32417 15.2443 7.44333 15.1984C7.60833 15.1251 7.79167 15.1068 7.975 15.1434C8.03 15.1526 8.085 15.1709 8.14 15.1984C8.195 15.2168 8.25 15.2443 8.305 15.2809L8.4425 15.3909C8.6075 15.5651 8.70833 15.8034 8.70833 16.0418C8.70833 16.2801 8.6075 16.5184 8.4425 16.6926ZM8.4425 13.4843C8.26833 13.6493 8.03 13.7501 7.79167 13.7501C7.55333 13.7501 7.315 13.6493 7.14083 13.4843C6.97583 13.3101 6.875 13.0718 6.875 12.8334C6.875 12.5951 6.97583 12.3568 7.14083 12.1826C7.3975 11.9259 7.80083 11.8434 8.14 11.9901C8.25917 12.0359 8.36 12.1001 8.4425 12.1826C8.6075 12.3568 8.70833 12.5951 8.70833 12.8334C8.70833 13.0718 8.6075 13.3101 8.4425 13.4843ZM11.6508 16.6926C11.4767 16.8576 11.2383 16.9584 11 16.9584C10.7617 16.9584 10.5233 16.8576 10.3492 16.6926C10.1842 16.5184 10.0833 16.2801 10.0833 16.0418C10.0833 15.8034 10.1842 15.5651 10.3492 15.3909C10.6883 15.0518 11.3117 15.0518 11.6508 15.3909C11.8158 15.5651 11.9167 15.8034 11.9167 16.0418C11.9167 16.2801 11.8158 16.5184 11.6508 16.6926ZM11.6508 13.4843C11.605 13.5209 11.5592 13.5576 11.5133 13.5943C11.4583 13.6309 11.4033 13.6584 11.3483 13.6768C11.2933 13.7043 11.2383 13.7226 11.1833 13.7318C11.1192 13.7409 11.0642 13.7501 11 13.7501C10.7617 13.7501 10.5233 13.6493 10.3492 13.4843C10.1842 13.3101 10.0833 13.0718 10.0833 12.8334C10.0833 12.5951 10.1842 12.3568 10.3492 12.1826C10.4317 12.1001 10.5325 12.0359 10.6517 11.9901C10.9908 11.8434 11.3942 11.9259 11.6508 12.1826C11.8158 12.3568 11.9167 12.5951 11.9167 12.8334C11.9167 13.0718 11.8158 13.3101 11.6508 13.4843ZM14.8592 16.6926C14.685 16.8576 14.4467 16.9584 14.2083 16.9584C13.97 16.9584 13.7317 16.8576 13.5575 16.6926C13.3925 16.5184 13.2917 16.2801 13.2917 16.0418C13.2917 15.8034 13.3925 15.5651 13.5575 15.3909C13.8967 15.0518 14.52 15.0518 14.8592 15.3909C15.0242 15.5651 15.125 15.8034 15.125 16.0418C15.125 16.2801 15.0242 16.5184 14.8592 16.6926ZM14.8592 13.4843C14.8133 13.5209 14.7675 13.5576 14.7217 13.5943C14.6667 13.6309 14.6117 13.6584 14.5567 13.6768C14.5017 13.7043 14.4467 13.7226 14.3917 13.7318C14.3275 13.7409 14.2633 13.7501 14.2083 13.7501C13.97 13.7501 13.7317 13.6493 13.5575 13.4843C13.3925 13.3101 13.2917 13.0718 13.2917 12.8334C13.2917 12.5951 13.3925 12.3568 13.5575 12.1826C13.6492 12.1001 13.7408 12.0359 13.86 11.9901C14.025 11.9168 14.2083 11.8984 14.3917 11.9351C14.4467 11.9443 14.5017 11.9626 14.5567 11.9901C14.6117 12.0084 14.6667 12.0359 14.7217 12.0726C14.7675 12.1093 14.8133 12.1459 14.8592 12.1826C15.0242 12.3568 15.125 12.5951 15.125 12.8334C15.125 13.0718 15.0242 13.3101 14.8592 13.4843Z" fill="currentColor" />
                </svg>
            }
            placeholderText="Date Range"
            disabled={disabled}
            readOnly={readOnly}
            style={{ opacity: disabled ? 0.5 : 1 }}
        />
    )
}