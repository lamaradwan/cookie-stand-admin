
export default function Footer(props){
    return(
      <footer className='bg-green-500 p-5'>
        {/* <p><span>&#169;</span>2021</p> */}
        {props.count} {props.count > 1 ? 'Locations world wide': 'Location world wide'} 
      </footer>
    )
}