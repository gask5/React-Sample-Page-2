import NavButton from "./NavButton";

const topBar ={
      width:'100%',
      display: "flex",
      justifyContent: "center",
      background: 'rgba(16,16,17,0.5)',
      position: "fixed",
      backdropFilter: "blur(5px)",
      zIndex: "2",
      marginTop: '-1rem'

}

const buttons ={
      display: "flex",
}

function Navbar(){
      return (
            <div style={topBar}>
                        <div alt="Left">
                              <NavButton name="Lorem Ipsum"
                              style/>
                        </div>
                        <div style = {buttons}>
                              <NavButton name="Works" />
                              <NavButton name="About" />
                              <NavButton name="Contacts" />
                        </div>
            </div>
      );
}

export default Navbar;