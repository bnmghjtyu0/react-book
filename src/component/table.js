import React, { Component } from 'react'

export class Table extends Component {
   constructor(props) {
    super(props);
    this.state = {
      results: [],
      orderBy: 0,
      orderAsc: false
    };
    setTimeout(() => {
      const { datas } = this.props;
      this.setState({
        results: this.props.datas
      });
    }, 1000);
    this.sortBy = this.sortBy.bind(this);
  }
  // sort
  compareBy(key) {
    const { orderAsc } = this.state;
    if (orderAsc) {
      return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    } else {
      return function(a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
  }
  handleClick(idx) {
    this.setState({
      orderBy: idx,
      orderAsc:
        this.state.orderBy === idx ? !this.state.orderAsc : this.state.orderAsc
    });
  }
  sortBy(e) {
    const { results = [] } = this.state;
    console.log(results)
    const target = e.currentTarget;
    const id = target.id;
    this.setState({
      currentPage: 1,
      orderBy: id,
      results: this.props.datas.sort(this.compareBy(id)),
      orderAsc: !this.state.orderAsc
    });
  }
  render() {
    const { results } = this.state;
    const { columns, datas } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {columns.map((column, idx) => {
              return (
                <th id={column.prop} onClick={this.sortBy}>
                  {column.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, idx) => {
            return (
              <tr>
                {columns.map((column, i) => {
                  return (
                    <td>
                      {column.hasOwnProperty("render")
                        ? column.render(data)
                        : data[column.prop]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }
}

export default Table