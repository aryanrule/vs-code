
import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
     <div>
        
        <Navbar/>

        <h3 className='text-center font-thick'><span className='text-btn-blue  underline'>Version 1.92</span> is now available Read about the new features and fixes from july</h3>


        <div className='flex flex-col custom:flex-row m-[50px] items-center justify-center gap-10'>


          <div className='codeediting mt-10  flex flex-col items-center  justify-center'>

              <div className='border-2 p-[10px] m-[20px] text-black  font-medium rounded-xl'>
                  <p className=''>Free. Built on open source . Runs everywhere</p>
              </div>

              <div className='m-[20px] p-[5px]'>
                  <h1 className='font-bold text-5xl text-center'>Code Editing. Redefined.</h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                     <button className=' m-[20px] w-[250px] h-[60px] bg-btn-blue border rounded-2xl text-white font-medium'>Download for Windows</button>
                     <p className='font-medium text-center'><span className='text-btn-blue underline'>Web</span>,<span className='text-btn-blue underline'>Insiders edition</span> or <span className='text-btn-blue underline'>platforms</span></p>
                     <p className='text-center font-thin m-[20px]'>by using VS Code , you agree  to its <span className='text-btn-blue underline'>licence</span> and <span className='text-btn-blue underline'>privacy statement</span></p>
              </div>        


          </div>

           <div  className='max-w-[500px]'>

               <img src='https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2-light.png'/>

           </div>
        </div>

        
        <div className='m-[10px] flex justify-between items-center gap-[50px]  flex-col custom:flex-row'>

               <div className='max-w-[500px]  m-[20px]'> 
                   <h1 className='font-bold text-3xl '>Code in any language</h1>
                   <p className=' font-semibold '>VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.</p>
               </div>
              
               <div className='grid grid-cols-3 m-[40px] border-black gap-[50px] max-w-[600px]'>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-js.png'/>
                     <p>JavaScript</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-ts.png'/>
                     <p>TypeScript</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-python.png'/>
                     <p>Python</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-cs.png'/>
                     <p>C#</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-cpp.png'/>
                     <p>C++</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-html.png'/>
                     <p>HTML</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-java.png'/>
                     <p>Java</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-json.png'/>
                     <p>Json</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-php.png'/>
                     <p>PHP</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-markdown.png'/>
                     <p>Markdown</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-powershell.png'/>
                     <p>Powershell</p>
                  </div>

                  <div className='flex items-center justify-center h-[50px] w-[100px]'>
                     <img className='h-[50px] w-[50px]' src='https://code.visualstudio.com/assets/home/language-yaml.png'/>
                     <p>YAML</p>
                  </div>

               </div> 
        </div>

        
     </div>
  )
}

export default App
