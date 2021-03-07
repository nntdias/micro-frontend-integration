import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import TopBar from './components/topBar/TopBar';
import { useStyles } from './DashboardLayout.style';

/**
 * DashboardLayout
 */
const DashboardLayout = () => {
	const classes = useStyles();
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<div className={classes.root}>
			<TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<NavBar onMobileClose={() => setMobileNavOpen(false)} openMobile={isMobileNavOpen} />
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
