import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client instead of react-dom
import 'assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import UserLayout from 'layouts/user';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const token = localStorage.getItem("token") || sessionStorage.getItem("token");
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<>
			<ToastContainer />
			<Routes>
				{token && user?.role ? (
					user.role === 'user' ? (
						<Route path="/*" element={<UserLayout />} />
					) : user.role === 'admin' ? (
						<Route path="/*" element={<AdminLayout />} />
					) : null
				) : (
					<Route path="/*" element={<AuthLayout />} />
				)}
			</Routes>
		</>
	);
}

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ThemeEditorProvider>
				<Router>
					<App />
				</Router>
			</ThemeEditorProvider>
		</ChakraProvider>
	</React.StrictMode>
);