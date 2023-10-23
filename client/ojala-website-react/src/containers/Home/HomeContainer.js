import React, { useRef } from "react";
import FeaturesLeft from "../../components/FeaturesLeft/FeaturesLeft";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Container } from "react-bootstrap";
import Download from "components/Download/Download";
import Cards from "components/Cards/Cards";
import Header from "components/Header/Header";
function HomeContainer() {
	const refDownload = useRef(null);

	const handleClickHeaderScrollToDownload = () => {
		refDownload.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Container fluid className="px-0">
			<Container fluid className="full-height px-0">
				<Header/>
				<Hero handleClickHeader={handleClickHeaderScrollToDownload}  />
			</Container>
			<FeaturesLeft />
			<Cards />
			<Download refDownload={refDownload} />
			<Footer />
		</Container>
	);
}

export default HomeContainer;
