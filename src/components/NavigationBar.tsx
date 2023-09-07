import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { navigationItems } from "../constants/navigationConstant";

export default function NavigationBar() {
	return (
		<Box sx={styleSheet.navBarContainer}>
			<HStack>
				{navigationItems.map((item) => {
					return (
						<Link href={item.path}>
							<Text key={item.id}>{item.title}</Text>
						</Link>
					);
				})}
			</HStack>
		</Box>
	);
}

const styleSheet = {
	navBarContainer: {
		py: "20px",
		px: "10px",
		w: "100%",
		bg: "orange",
	},
};
