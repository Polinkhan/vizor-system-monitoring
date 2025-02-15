/*
 * Project Name: "Aerosphere Suit"
 * Author: [Author Name]
 * Created: [Creation Date]
 * Modified: [Last Modification Date]
 * Component: RootPage
 * Description: Component for rendering the root page layout.
 */

import { Outlet } from "react-router-dom";
import RootLayout from "../../../layouts/RootLayout";

const RootPage = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default RootPage;
