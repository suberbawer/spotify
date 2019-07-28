import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

export default class ListItems extends PureComponent {
  renderHeader = () => {
    const { titles } = this.props;
    return titles.map((title, i) => <th key={`${title}-${i}`}>{title}</th>); // eslint-disable-line
  };

  render() {
    const { items, emptyMessage, renderRow, titles } = this.props;

    return (
      <div style={{ width: "100%", height: "60%" }}>
        {items && items.length ? (
          <Table
            dark
            responsive
            hover
            borderless
            style={{ backgroundColor: "transparent" }}
          >
            {titles && (
              <thead>
                <tr style={{ opacity: "0.5" }}>{this.renderHeader()}</tr>
              </thead>
            )}
            <tbody>{items.map(item => renderRow(item))}</tbody>
          </Table>
        ) : (
          <div style={{ color: "white", display: "flex", height: "100%" }}>
            <div
              style={{
                margin: "auto"
              }}
            >
              <div>
                <h5
                  style={{
                    fontSize: "30px",
                    fontWeight: "700"
                  }}
                >
                  Search Spotify
                </h5>
              </div>
              <div style={{ textAlign: "center", opacity: "0.8" }}>
                <span>{emptyMessage}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired,// eslint-disable-line
  emptyMessage: PropTypes.string,
  titles: PropTypes.array,// eslint-disable-line
  renderRow: PropTypes.func.isRequired
};

ListItems.defaultProps = {
  emptyMessage: "",
  titles: []
};
