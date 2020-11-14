import React from 'react';
import {FaHotel} from 'react-icons/fa';
import {MdAirplanemodeActive,MdTimer} from 'react-icons/md';
import {FaMoneyCheck} from 'react-icons/fa';

export const StatsData = [
  {
    icon: (<FaHotel css={`
      color #047bf1;
      `}/>),
    title: "The best attention we have",
    desc: "We are a team attending your services when you need it",
  },
{
    icon: (<MdAirplanemodeActive css={`
      color #f3a82e;
      `}/>),
    title: "Over 100 Sites",
    desc: "100 incredible places in one place",
  },
  {
    icon: (<MdTimer css={`
      color #f34f2e;
      `}/>),
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (<FaMoneyCheck css={`
      color #3af576;
      `}/>),
    title: "Best Deals",
    desc: "We offer the best prices",
  },

]

