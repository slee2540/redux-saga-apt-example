import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as listAction from "actions/list";

class RightImage extends React.Component {
  render() {
    const { news } = this.props;
    // console.log(news);
    return (
      <div>
        <ul>
          {news.length > 0
            ? news.map(item => {
                return <li key={item.title}>{item.title}</li>;
              })
            : null}
        </ul>
      </div>
    );
  }
}

RightImage.propTypes = {
  news: PropTypes.array
  // loading: PropTypes.bool
};

RightImage.defaultProps = {
  news: {}
  // loading: false
};

export default connect(
  state => ({
    news: state.news
  }),
  dispatch => ({
    ListAction: bindActionCreators(listAction, dispatch)
  })
)(RightImage);
