const Header = (props) => {
    return(
        <div>
            <h1>Poseidon (Beta)</h1>
            {props.children}
        </div>
    );
}

export default Header;