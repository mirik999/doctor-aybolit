import React, {PureComponent, Fragment} from 'react';
import classNames from 'classnames';


class AdminGallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
      itemsPerPage: props.itemsPerPage,
      items: []
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (event) => {
    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { items, currentPage, itemsPerPage } = this.state;

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentItems = items.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Fragment>
        {
          pageNumbers.map((number, idx) => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handlePageClick}
                className={classNames({
                  "pg-num": currentPage !== number,
                  "pg-num-active": currentPage === number,
                })}
              >
                {number}
              </li>
            )
          })
        }
      </Fragment>
    );
  }
}


export default AdminGallery;