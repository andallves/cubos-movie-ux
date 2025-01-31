import logoCubos from '../../../../assets/logo-cubos.svg';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div>
				<img src={logoCubos} />
			</div>
			<div>
				<button>Theme</button>
			</div>
		</nav>
	)
}