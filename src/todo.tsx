export const Todo = (props) => {
  const { title, userid, completed } = props;

  return <p>{`${completed}${title}(ユーザー:${userid})`}</p>;
};
