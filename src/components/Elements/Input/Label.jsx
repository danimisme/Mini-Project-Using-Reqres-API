const Label = (props) => {
  const { label, name } = props;
  return <label htmlFor={name}>{label}</label>;
};

export default Label;
