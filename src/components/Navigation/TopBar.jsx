import PropType from "prop-types";

const TopBar = ({ theme = "#000000" }) => {

    return (
        <header className="row-start-1">
            <meta name="theme-color" content={theme} />
        </header>
    )
}

TopBar.protoTypes = {
    theme: PropType.string
}

export default TopBar