
import React from "react";
import { connect } from "react-redux";
import { setPage } from "../../actions";
import PropTypes from "prop-types"

const mapStateToProps = state => {
    return {
        pages: Math.ceil(state.visibleData.length / state.dataPerPage),
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: page => dispatch(setPage(page))
    }
}

function Pagination({ currentPage, pages, setCurrentPage }) {
    const handlePrev = () => {
        if(currentPage > 1) {
            setCurrentPage(--currentPage);
        }
    }

    const handleNext = () => {
        if(currentPage < pages) {
            setCurrentPage(++currentPage);
        }
    }

  return (
      <div className="pagination">
            <button 
                className="button button_outlined pagination__button"
                onClick={handlePrev}
            >Prev</button>
            <span className="pagination__page-number">
                {`${currentPage} / ${pages}`}
            </span>
            <button 
                className="button button_outlined pagination__button"
                onClick={handleNext}
            >Next</button>
      </div>
  );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
