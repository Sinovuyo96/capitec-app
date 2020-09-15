import React from 'react'



const nStyles={
    nav: { margin:0, backgroundColor:'#efefe', color:'white', padding: '12 0' },
    a:{color:'white'}
  }

class Navbar extends React.Component {
 render() {
   return (
<nav style={nStyles.nav} >
    <div  class="nav-wrapper">
      <a href="google.com" class="brand-logo">Logo</a>
      <ul id="nav-mobile" className="Right" class="right hide-on-med-and-down">
        <li ><a style={nStyles.li} href="facebook.com">Home</a></li>
        <li><a href="About.html">About</a></li>
        <li><a href="collapsible.html">Logout</a></li>
        <p>
The web application will be used as a central point for deliveries, this service will be used by shops that need to deliver goods to the costumers, when customers buy at a shop they require deliveries especially the online shops, the seller will log a delivery request detailing the delivery information. 
Anyone with the means to do deliveries will able to register in the system and will get approval to do deliveries. 
When the shop have deliveries, <br/>
delivery guys will login and accept the request, <br/>
the consumer will get notified about delivery information with detail of the person going to deliver, <br/>
then SLA will start to run and all will be used to measure the turnaround time for the delivery guys. <br/>
Once the delivery is completed the consumer will accept the delivery and add rating and review that will be part of SLA for drivers. </p>        
      </ul>
    </div>
    
  </nav>
  )
  
};
};


const bStyles={
  button: {hover:'backgroung:white',margin: '100px' ,display:'flex', backgroundColor:'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px', borderRadius: '2px' }

}

class Button extends React.Component {
      // This syntax ensures `this` is bound within handleClick.
      // Warning: this is *experimental* syntax.
      handleClick = () => {
        console.log('this is:', this);
      }
    
      
      render() {
        return (
          <button style={bStyles.button} onClick={this.handleClick}>
            Track Order
          </button>

          
          
        );
      }
    }
export default (Navbar,Button);