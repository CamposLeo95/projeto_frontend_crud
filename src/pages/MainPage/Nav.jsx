
const Nav = ({ onLogout }) => {
    return(
        <div className="nav">
            <h1 className='logo'>Repositories</h1>
            <button onClick={ onLogout }>Sair</button>   
    
        </div>
    );
};


export default Nav;