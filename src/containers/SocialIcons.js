import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faTwitter, faInstagram);

const SocialIcons = () => (
  <div className="d-flex justify-content-around social-icons">
    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" className="" />
    <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" className="" />
    <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="" />
  </div>
);

export default SocialIcons;
