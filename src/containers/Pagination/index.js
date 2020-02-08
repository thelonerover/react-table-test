
import React from "react";
import { connect } from "react-redux";
import { setPage } from "../../actions";
import "./pagination.scss";

const mapStateToProps = state => {
    return {
        pages: Math.ceil(state.visibleData.length / state.dataPerPage),
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: page => dispatch(setPage(page))
    }
}

function Pagination({ currentPage, pages, onClick }) {
    const handlePrev = () => {
        if(currentPage > 1) {
            onClick(--currentPage);
        }
    }

    const handleNext = () => {
        if(currentPage < pages) {
            onClick(++currentPage);
        }
    }

  return (
      <div className="pagination">
            <button 
                className="pagination__button"
                onClick={handlePrev}
            >Prev</button>
            <span className="pagination__page-number">
                {`${currentPage} / ${pages}`}
            </span>
            <button 
                className="pagination__button"
                onClick={handleNext}
            >Next</button>
      </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
