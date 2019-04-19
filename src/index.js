import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card } from 'antd';
import './style';

const prefix = 'mo-template-pc';

class TemplatePc extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  }

  render() {
    const { className, ...others } = this.props;
    const cls = classNames({
      [`${prefix}`]: true,
      [className]: className,
    });

    return (
      <div {...others} className={cls}>
        <Card title={this.props.title} extra={<a href="/">More</a>} style={{ width: 300 }}>
          <p>card1</p>
          <p>card1</p>
        </Card>
      </div>
    );
  }
}

export default TemplatePc;
