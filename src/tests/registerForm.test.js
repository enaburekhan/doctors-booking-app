import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import RegisterForm from '../components/RegisterForm';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
jest.spyOn(reactRedux, 'useDispatch');

test('renders correctly', () => {
  useSelectorMock.mockReturnValue({ loading: true });
  const tree = create(<RegisterForm access="Login" endpoint="authentications" />).toJSON();
  expect(tree).toMatchSnapshot();
});
