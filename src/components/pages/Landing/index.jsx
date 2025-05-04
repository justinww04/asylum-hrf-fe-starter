import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';




import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';
import { Container } from 'postcss';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 40; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.open.href = "https://www.humanrightsfirst.org"
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>


    



     

                                {/* Centered Header Images*/}



   <section className='container mx-auto px-4 py-10'>
<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>

         <div className='flex flex-col justify-start items-center'>
           <img src={barGraph} alt= "Bar Graph" className='max-w-full h-full max-w-xs'        />
            <p className='mt-4 '>   Search Grant Rates By Office</p>
          </div>
  


          <div className='flex flex-col justify-start items-center'>
           <img src={pieChart} alt= "Pie Chart" className='max-w-full h-full max-w-xs'        />
            <p className='mt-4 '>   Search Grant Rates By Office</p>
          </div>



          <div className='flex flex-col justify-start items-center'>
           <img src={lineGraph} alt= "Line Graph" className='max-w-full h-full max-w-s'        />
            <p className='mt-4'>   Search Grant Rates By Office</p>
          </div>

</div>
        

</section>


<section className='container mx-auto px-4 py-6 text-center'>
  <div className='space-x-4'>

  <button 
  onClick={() => navigate('/graphs')}
  className='bg-gray-500 text-white py-2 px-6 hover:bg-gray-800 '>
       View the Data
  </button>
  <button className='bg-gray-500 text-white py-2 px-6 hover:bg-gray-800 ' >
       Download the Data
  </button>

</div>

</section>










<section className='container mx-auto flex flex-row items-center justify-between py-12'>
  
    <img src={paperStack} alt= 'paper stack image' className='w-2/5 max-w-xl h-auto rounded-xl'                  />
          <p className='w-2/5 text-center'> Human Rights has created a search tool to give you a user-friendly way to explore a data set asylum decisions between FY 2016 and May 2021 by the USCA Asylum office, which we recieved through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.     </p>


</section>



<section className='container mx-auto flex flex-row items-center justify-center py-12'>
  <header className='text-3xl '> Systemic Disparity Insights

  </header>


</section>



<section className='container mx-auto px-4 py-10'>
<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>

         <div className='flex flex-col justify-start items-center'>
           
            <header className='mt-4 py-6-top pb-10 text-3xl'>   36%</header>

            <p className='text-center'>  By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.    </p>
          </div>
  


          <div className='flex flex-col justify-start items-center'>
           
            <header className='mt-4 py-6-top pb-10 text-3xl ' >   5%</header>

            <p className='text-center'> The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.     </p>
          </div>



          <div className='flex flex-col justify-start items-center'>
           
            <header className='mt-4 py-6-top pb-10 text-3xl '>   6x Lower</header>

            <p className='text-center'> Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Franciso asylum office.              </p>
          </div>

</div>

</section>



<section className='flex flex-col justify-start items-center pt-5 pb-10'>
  

    <button className='bg-[#666555] text-white pr-3 pl-3 pt-1 pb-1 hover:bg-[#555444] '>
              Read More
    </button>
</section>



<section className='flex flex-col justify-start items-center pt-5 pb-10'>
  

<button 
  onClick={scrollToTop}
  className="text-black hover:[text-shadow:2px_2px_4px_rgba(0,_0,_0,_0.5)] py-2 px-4 rounded"
>
  Back To Top ^
</button>
</section>




    </div>
  );
};