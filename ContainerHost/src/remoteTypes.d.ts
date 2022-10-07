///<reference types="react" />

declare module "Layout/Header" {
	const Header: React.ComponentType<{title: string}>;

	export default Header;
}

declare module "Layout/Content" {
	const Content: React.ComponentType<{children: JSX.Element}>;

	export default Content;
}

declare module "Layout/Footer" {
	const Footer: React.ComponentType<{title: string}>;

	export default Footer;
}

declare module "ListData/ListCharacters" {
	const ListCharacters: React.ComponentType;

	export default ListCharacters;
}
