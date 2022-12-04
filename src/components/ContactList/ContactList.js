import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}{' '}
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
