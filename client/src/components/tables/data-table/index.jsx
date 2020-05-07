import React, { Component } from "react";
import { renderHeaders, renderBody } from './functions';
import { connect } from 'react-redux';
import { setActiveRecord } from './../../../redux/actions';

import PropTypes from 'prop-types';

export class DataTable extends Component {
  render() {
    const { tableName, data, classStyle, isRenderLinks, setActiveItem } = this.props;

    const renderBodyProps = {
      tableName,
      data,
      isRenderLinks,
      setActiveItem
    };
    const renderHeaderProps = {
      keys: Object.keys(data[0])
    }
    return (
      <table className={"table " + classStyle} data-test="dataTableComponent" id="DataTable" style={{ marginTop: '15px', border: '1px solid black' }}>
        {renderHeaders(renderHeaderProps)}
        {renderBody(renderBodyProps)}
      </table>
    )
  }
}


DataTable.propTypes = {
  tableName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    dataName: PropTypes.string.isRequired
  })),
  classStyle: PropTypes.string,
  isRenderLinks: PropTypes.bool
}
function mapDispatchToProps(dispatch) {
  return {
    setActiveItem: (record) => {
      dispatch(setActiveRecord("activeRecord", record))
    }
  }
}
export default connect(() => { }, mapDispatchToProps)(DataTable);