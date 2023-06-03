import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex h-[70vh] flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mb-4 text-lg">
                The requested page could not be found.
            </p>
            <Link
                to="/"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Go to Home Page
            </Link>
        </div>
    );
};

export default NotFoundPage;
