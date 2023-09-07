import { navigationPath } from "./navigationPath";

type navigationItem = {
	id: number;
	title: string;
	path: navigationPath;
};

export const navigationItems: navigationItem[] = [
	{ id: 1, title: "Sean Anderson", path: navigationPath.home },
	{ id: 2, title: "Item 2", path: navigationPath.about },
	{ id: 3, title: "Item 3", path: navigationPath.home },
	{ id: 4, title: "Item 4", path: navigationPath.home },
];
