import React from "react";
import "./Table.scss";
import PropTypes from "prop-types";
import Icon from "../icon/Icon";
import Loader from "../loader/Loader";

const Table = ({ data }) => {
    function renderDataCells() {
        return (
            <>
                {!data
                    ? null
                    : data.map((post, idx) => (
                          <tr key={idx}>
                              <th scope="row">
                                  <p className="idColumn d-inline-block text-truncate">
                                      {post._id}
                                  </p>
                              </th>
                              <td className="text-center">{post.title}</td>
                              <td>
                                  <p className="authorColumn d-inline-block text-truncate">
                                      {post.author}
                                  </p>
                              </td>
                              <td>
                                  <button className="btn btn-link btn-small">
                                      <Icon className="fas fa-eye" size={20} />
                                  </button>
                              </td>
                              <td>
                                  <button className="btn btn-link">
                                      <Icon
                                          className="fas fa-edit"
                                          size={20}
                                          color="grey"
                                      />
                                  </button>
                              </td>
                              <td>
                                  <button className="btn btn-link">
                                      <Icon
                                          className="fas fa-trash"
                                          size={20}
                                          color="red"
                                      />
                                  </button>
                              </td>
                          </tr>
                      ))}
            </>
        );
    }

    return (
        <>
            {!data ? (
                <div className="d-flex justify-content-center py-3">
                    <Loader />
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="dkTable table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">View</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>{renderDataCells()}</tbody>
                    </table>
                </div>
            )}
        </>
    );
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Table;
