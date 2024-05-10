import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div id="error-page" className="md:flex md:flex-col md:justify-center ">
                <img src="https://i.ibb.co/M7QZq30/004.jpg" alt="Error"/>
                {/* <p>
                    <i>{error.statusText || error.message}</i>
                </p> */}
            </div>
        </div>
    );
};

export default ErrorPage;