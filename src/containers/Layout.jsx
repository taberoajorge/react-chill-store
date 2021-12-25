import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLayout = styled.div``;

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
