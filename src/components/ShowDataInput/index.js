import React from 'react'
import PropTypes from 'prop-types'

const ShowData = ({ data = [], type, handleChange, handleFocus, handleBlur, maxValue = 20 }) => (
  <>
    <td>{type}</td>
    {data &&
      data.slice(Math.max(data.length - maxValue, 0)).map(({ index, stocks }) => (
        <td>
          <input
            style={{ width: 55 }}
            onChange={({ target: { value } }) => handleChange(index, value)}
            type="number"
            value={stocks[type].toString()}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </td>
      ))}
  </>
)
ShowData.propTypes = {
  data: PropTypes.array,
  type: PropTypes.oneOf(['CAC40', 'NASDAQ']).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  maxValue: PropTypes.number,
}

export default ShowData
