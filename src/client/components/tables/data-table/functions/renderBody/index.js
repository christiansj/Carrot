import React from 'react';
import PropTypes from'prop-types';

import { renderCrudButtons } from './../index';

const renderBody = (props) => {
  const { tableName, data, isRenderLinks, setActiveItem } = props;
  
  return (
    <tbody data-test="dataTableBody">
      {
        data.map((item, index) => {
          const crudButtonProps = {
            tableName, data: item, isRenderLinks, setActiveItem
          }

          return (
            <tr key={"link" + index} data-test="dataTableTR">
              {renderRow(item)}
              {renderCrudButtons(crudButtonProps)}
            </tr>
          )
        })
      }
    </tbody>
  );
}

const renderRow = (data) => (
  Object.keys(data).map((item, index) => {
    if (item !== "dataName")
      return (
        <td key={item + index}>
          {data[item]}
        </td>
      )

    return null;
  })
)

renderBody.propTypes = {
  tableName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    dataName: PropTypes.string.isRequired
  })),
  isRenderLinks: PropTypes.bool,
  setActiveItem: PropTypes.func.isRequired
}

export default renderBody;