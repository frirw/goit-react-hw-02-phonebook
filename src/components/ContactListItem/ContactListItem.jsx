export const ContactListItem = ({ data, deleteContact }) => {
  const buttonStyle = {
    backgroundColor: 'pink',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <li key={data.id}>
      {data.name} : {data.number}
      <button
        onClick={() => deleteContact(data.id)}
        type="button"
        style={buttonStyle}
      >
        {' '}
        Delete{' '}
      </button>
    </li>
  );
};
