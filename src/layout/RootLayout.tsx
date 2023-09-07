import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import NavigationBar from "../components/NavigationBar";

export default function RootLayout() {
	return (
		<ChakraProvider>
			<NavigationBar />
			<Outlet />
		</ChakraProvider>
	);
}
