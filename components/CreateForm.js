export default function CreateForm(props){
    // const[cookiesData, setCookiesData] = useState([]); //Array of objects where each object represent the data from the user

    function handleUserInput(e){
      e.preventDefault();
      console.log('Form has been submitted')
      props.getUserInput(e.target.location.value)
    }
    return(
        <form className='bg-green-300 p-8' onSubmit={handleUserInput}>
        <h2 className='text-center text-2xl'>Create Cookie Stand</h2>
        <label>Location</label>
        <input type='text' className='border-solid border-2 border-green-500' name='location' required></input>
        <br/>
        <div className='flex justify-evenly '>
        <label className='text-sm'>Minimum Customers per Hour</label>
        <label className='text-sm'>Maximum Customers per Hour</label>
        <label className='text-sm' >Average Cookies per Sale</label>
        </div>
        <br/>
        <input type='text' className='border-solid border-2 border-green-500' name='minCustomers'></input>
        <input type='text' className='border-solid border-2 border-green-500' name='maxCustomers'></input>
        <input type='text' className='border-solid border-2 border-green-500' name='avgCookies'></input>
        <button className='bg-green-700 py-1 px-7' >Create</button>
      </form>
    )
}