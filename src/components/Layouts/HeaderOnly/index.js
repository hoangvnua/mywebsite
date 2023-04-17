import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container mgt">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
