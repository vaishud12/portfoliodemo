import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer' id="foot1">
       <div className='footersec'>
       <div className="footdiv1"><h6>GET IN TOUCH</h6><p>vaishuu2397@gmail.com</p><p>+91 8805270556</p></div>
       <div className='footdiv2'>
          <h5><button id="headerbtn">Movie Website</button></h5>
          <h5><button id="headerbtn">Foody</button></h5>
          <h5><button id="headerbtn">Tasky</button></h5>
          <h5><button id="headerbtn">BookMyShow Clone</button></h5>
          <h5><button id="headerbtn">Piano</button></h5>

          
       </div>
       <div className="footdiv3">
          <div class="footart">
            <div className="navicon"><i class="fa-brands fa-facebook"></i></div>
            <div className="navicon"><i class="fa-brands fa-linkedin"></i></div>
            <div className="navicon"><i class="fa-brands fa-twitter"></i></div></div><br/>
               <p>@copywrite vaishnavi</p>
            </div>
       </div>
    </div>
    </>
  )
}

export default Footer