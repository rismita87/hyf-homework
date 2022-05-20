import UserItem from "./UserItem";
export default function UserList(props) {
  const users = props.data.items;
  return (
    <div>
      {users.map((user) => (
        <UserItem login={user.login} key={user.login} />
      ))}
    </div>
  );
}
