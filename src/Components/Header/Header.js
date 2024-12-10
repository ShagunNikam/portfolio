import React from "react";
import './_header.scss';

const Header = () => {
	return (
		<>
			<section className="header_section">
				<header className="header_wrapper">
					<div className="container">
						<div className="logo_wrapper">
							<h1 className="logo_title">
								<a href="#" className="logo_link">
									{/* <img src={Logo} alt="logo" className="logo_bg"/> */}
								</a>
								<ul className="logo_link">
									<li>
										<div className="glow">H</div>
									</li>
									<li>
										<div className="glow">E</div>
									</li>
									<li>
										<div className="glow">Y</div>
									</li>
									<li>
										<div className="glow">!</div>
									</li>

								</ul>
							</h1>
						</div>
					</div>
					{/* <div className="menu_burger" id="menu_burger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
				</header>
			</section>
		</>
	)
}

export default Header;