import { create } from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import Logout from '../components/Logout';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
jest.spyOn(reactRedux, 'useDispatch');

useSelectorMock.mockReturnValue('logout');

test('renders correctly', () => {
  const tree = create(<Logout />).toJSON();
  expect(tree).toMatchSnapshot();
});
