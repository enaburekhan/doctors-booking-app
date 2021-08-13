import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => (<div className="loading"><FontAwesomeIcon icon={faSpinner} spin size="5x" /></div>);

export default Loading;
