import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from "react-bootstrap";


const MainNavigation = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<img
							src="/logo192.jpg"
							className="profile-header"
							alt="CSSA Logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="w-100 nav-justified">
							<Nav.Item>
								<Nav.Link as={Link} to="/career">职业宣讲</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link as={Link} to="/academic">学术论坛</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link as={Link} to="/culture_and_sports">文体活动</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link as={Link} to="/student">学生服务</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link as={Link} to="/cssa">学联专栏</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link as={Link} to="/about_us">关于我们</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</header>
	);
}

export default MainNavigation;