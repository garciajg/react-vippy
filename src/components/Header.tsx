import * as React from 'react';

interface IProps {
  name?: string;
}

/*
Stateless Functional Component (SFC) is not required,
but is what allows the use of defaultProps
*/
const Header: React.SFC<IProps> = (props: IProps) => (
  <h1>Hello, {props.name}!</h1>
);

Header.defaultProps = {
  name: 'World',
};

export default Header;
