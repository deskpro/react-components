import PropTypes from 'prop-types';
import LabelInput from 'Components/Label';

class LabelInputAutosuggest extends LabelInput {
  static propTypes = {
    labels:  PropTypes.array,
    options: PropTypes.array
  };
}
export default LabelInputAutosuggest;
