import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashBoardPages = () => {
  useLogOutRedirect();

  return <div>DashBoard Page</div>;
};
