import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ShowChart = ({ data = [], maxValue = 20 }) => (
  <LineChart
    width={900}
    height={500}
    data={
      data
        ? data
            .slice(Math.max(data.length - maxValue, 0))
            .map(({ index, timestamp, stocks: { CAC40, NASDAQ } }) => ({
              index,
              timestamp,
              CAC40,
              NASDAQ,
            }))
        : []
    }
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="index" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="CAC40" stroke="#8884d8" isAnimationActive={false} />
    <Line type="monotone" dataKey="NASDAQ" stroke="#82ca9d" isAnimationActive={false} />
  </LineChart>
)

ShowChart.propTypes = {
  data: PropTypes.array,
  maxValue: PropTypes.number,
}

export default ShowChart
