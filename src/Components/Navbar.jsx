const Navbar = () => {
  const { state, dispatch } = useContextGlobal(); 
  const toggleTheme = () => {
    console.log(state.theme);
    dispatch({ type: "TOGGLE_THEME", payload: !state.theme });
  }; 

  return (
    <nav>
      <Link to= "/">
        <h4>Inicio</h4>
      </Link>
      <Link to="contact">
        <h4>Contacto</h4>
      </Link>
      <Link to="/favs"> 
        <h4>Destacados</h4>
      </Link>
      
      <button className='theme-button' onClick={toggleTheme}>
        {state.theme ? "Dark Theme" : "Light Theme"}
      </button>
    </nav>
  );
};

export default Navbar;