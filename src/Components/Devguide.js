import React from 'react';
import Footer from './footer';

const DevGuide = ()=>{

    return<>
    <section className='devguide'>

           <section className='intro'>
           <hr style={{margin:"0"}}/>
           <center>
           <h3> Easy, Fast, Reliable</h3>
           </center>
           <hr/>
           <p> HpTech has a simple  syntax.Its main aim is to setup easy remote-communication process among a wide variety of devices</p>
          <p>if you want to create a project which need to transfer data over the internet,if your project need to send and receive commands over the internet, then HpTech might be the easiest way to do this work</p>
          <p> the main moto of this library is to provide an  easy-process  to communicate over  the internet </p>
          
          <hr/>

          <center>
            <h2>GET STARTED....</h2>
            </center>
            <p>first, we need to download the HpTech library <a href='https://github.com/Harpal-Tandwal/HpTech'>download HpTech</a> </p>
            <hr/>
            <center>
            <h3>Setting up the key & getting stringified format of your json data</h3>
           </center>
          </section>
          <section className='description-section'>
            <br/>
            <h3>The following keywords will help you to create your dream project easily</h3>
<h3> <code>hptechObject</code> obj  <span className='decsription'>&#8594; to create an object of type 'hptechObject'</span></h3>
<h3><code>pack(key, value)</code><span className='decsription'>&#8594;pack key value pair in your object</span></h3>
<h3><code>josn()</code> <span className='decsription'>&#8594; returns stringified form of json </span></h3>        
           </section>
    
      <section className='code-section'>

            <p>#include &lt;HpTech.h&gt;</p>

            <p> void <code>setup() &#123;</code></p>
            <p> <code>Serial.begin(115200);</code></p>
            <p> <code>hptechObject</code> obj; </p>
            {/* <p>  obj.<code>setKey("PLACE YOUR SECRET KEY");</code></p> */}
            <p>obj.<code>pack(Key,Value);</code></p>
            <p><code>Serial.print(obj.json());</code></p>
            <p>&#125;</p>
           <p>void <code>loop() </code> &#123; <br/>// write loop code here<br/> &#125;</p>
            
            </section>
            
           <hr/>
           <center>
            <h3>Sending data to HpTech</h3>
           </center>
           <section className='description-section'>
            <br/>
            <h2><code>sendJosn()</code> <span className='decsription'>&#8594; send all the packed key value pairs to HpTech. </span></h2>        

          
          <br/>
          </section>
          <section className='code-section'>
          <p> #include &lt;HpTech.h &gt;<br/>

            const char* ssid = "your ssid";<br/>
            const char* password  ="your password";<br/><br/>

      
            void  <code> setup()</code> &#123;

            <br/>
             <code> Serial.begin</code>(115200);<br/><br/>
             <code>WiFi.mode</code>(WIFI_AP_STA);<br/>
             <code> WiFi.begin</code>("your ssid", "your password");<br/>
              <code>Serial.print</code>("Connecting to WiFi ..");<br/>
              
              while (<code>WiFi.status()</code> != WL_CONNECTED) &#123;<br/>
                <code>Serial.print</code>('.');<br/>
                
                &#125;<br/>
            <code>Serial.println</code>(WiFi.localIP());<br/>
              <code>Serial.println</code>("Setup done");<br/><br/>


             <code> hptechObject</code> obj;<br/><br/>
              obj.<code>setKey</code>("your secret key");   // set project secret key<br/>   
            
              
             <br/>obj.<code>pack</code>("name","nittu"); <br/><br/>
             obj<code>.sendJson();</code> <br/>
              
              <br/>
              &#125;
             void <code>loop()</code> &#123; &#125;
         
          </p>
          </section><br/>
          <hr/>
          <center>
            <h3>Getting data from HpTech</h3>
           </center>
           <h2><code>getJosn()</code> <span className='decsription'>&#8594; getting back all the  key value pairs from HpTech. </span></h2>        

       
          <section className='code-section'>
          <p> #include &lt;HpTech.h &gt;<br/>

            const char* ssid = "your ssid";<br/>
            const char* password  ="your password";<br/><br/>

      
            void  <code> setup()</code> &#123;

            <br/>
             <code> Serial.begin</code>(115200);<br/><br/>
             <code>WiFi.mode</code>(WIFI_AP_STA);<br/>
             <code> WiFi.begin</code>("your ssid", "your password");<br/>
            <code>Serial.print</code>("Connecting to WiFi ..");<br/>
              
              while (<code>WiFi.status()</code> != WL_CONNECTED) &#123;<br/>
                <code>Serial.print</code>('.');<br/>
                
                &#125;<br/>
            <code>Serial.println</code>(WiFi.localIP());<br/>
              <code>Serial.println</code>("Setup done");<br/><br/>


             <code> hptechObject</code> obj;<br/><br/>
              obj.<code>setKey</code>("your secret key");   // set project secret key<br/>   
            
             obj<code>.getJson();</code> <br/>
              
              <br/>
              &#125;
             void <code>loop()</code> &#123; &#125;
         
          </p>
          </section>
          <hr/>


     <Footer/>
    </section>

  
    </>



}
export default DevGuide;
