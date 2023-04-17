import Header from "../components/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div className="content container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
