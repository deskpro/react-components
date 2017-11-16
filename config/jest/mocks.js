// https://github.com/YouCanBookMe/react-datetime/issues/384#issuecomment-318888730
jest.mock('react-dom', () => ({
  findDOMNode: () => {}
}));

