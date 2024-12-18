import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className='nav-img' src="logo.png" alt="" />
        <span>IT Monitoring</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon' />
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className='icon' />
      </div>
    </div>
  )
}

export default Navbar