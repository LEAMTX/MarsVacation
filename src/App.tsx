import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=xm2xuPgTQptRvQ6gisd0VNRtJmWoB7Ou7Sj9l1QD",
		)
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	console.log(photos);

	return <></>;
}

export default App;
