import { Wrapper, Icon, Input } from './SearchBox.styled';

export const SearchBox = ({ onChange }) => {
  let newValue;
  const onSubmit = e => {
    e.preventDefault();
    onChange(newValue);
  };
  return (
    <Wrapper>
      <form action="" onSubmit={e => onSubmit(e)}>
        <Icon />
        <Input
          type="text"
          onChange={e => {
            newValue = e.target.value;
          }}
        />
      </form>
    </Wrapper>
  );
};
