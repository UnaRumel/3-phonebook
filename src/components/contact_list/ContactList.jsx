import { ContainerItem, ContainerList } from './ContactList.styled';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContainerList>
      {contacts.map(({ id, name, number }) => (
        <ContainerItem key={id}>
          {name}: {number}
          <AiOutlineCloseCircle onClick={() => onDelete({ id })} />
        </ContainerItem>
      ))}
    </ContainerList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
