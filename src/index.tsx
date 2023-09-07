import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { navigationPath } from "./constants/navigationPath";
import { navigationItems } from "./constants/navigationConstant";

const container = document.getElementById("root") as HTMLElement;

const routes = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: navigationItems.map((e) => ({ path: e.path, element: getRoutingElement(e.path) })),
	},
]);

function getRoutingElement(path: navigationPath) {
	switch (path) {
		case navigationPath.home:
			return <HomeScreen />;
		case navigationPath.about:
			return <AboutScreen />;
		default:
			break;
	}
}

ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
