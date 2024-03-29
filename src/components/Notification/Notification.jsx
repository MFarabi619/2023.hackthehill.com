import { useEffect, useState } from "react";
import "./Notification.css";

function Notification() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisible(true);
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<div
			id="Notification"
			className="Notification"
			style={{
				transform: visible ? "translateY(0)" : "translateY(100%) scaleY(0)",
			}}
			aria-hidden={!visible}
		>
			<p>
				Attention hackers! Registrations close on <time dateTime="2023-01-29">Sunday, January 29th</time>! Don't
				miss out!
			</p>
			<button
				className="CloseButton"
				aria-label="Close Notification"
				title="Close Notification"
				onClick={() => setVisible(false)}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<title>Close Notification</title>
					<path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>
		</div>
	);
}

export default Notification;
