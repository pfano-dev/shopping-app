import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'
import './p.css';


const books =[
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/61Ars9rdgGS._AC_UL200_SR200,200_.jpg",
    title:"Atomic  Ones",
    author:"by James Clear"
      }
    ,
    
      {
        img:"https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
        title:"Billy Summers",
        author:"by Stephen King "
          }
        
    ,{
          img:"https://images-na.ssl-images-amazon.com/images/I/81yXbSemHqL._AC_UL200_SR200,200_.jpg",
          title:"Inside Corporate",
          author:" by Mark R. Levin"
            },
  {
img:"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
title:" Break  Ones",
author:"by James Clear"
  }
,

  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81gbU%2Bo1A5L._AC_UL200_SR200,200_.jpg",
    title:"Billy Summers",
    author:"by Stephen King "
      }
    
,{
      img:"https://images-na.ssl-images-amazon.com/images/I/711ChdbteIL._AC_UL200_SR200,200_.jpg",
      title:"Woke Justice",
      author:" by Mark R. Levin"
        }
      ,
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
    title:"  Good Habits",
    author:"by James Clear"
      }
    ,
    
      {
        img:"https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL._AC_UL200_SR200,200_.jpg",
        title:"Billy Summers",
        author:"by Stephen King "
          }
        
    ,{
          img:"https://images-na.ssl-images-amazon.com/images/I/917UpRvkf0L._AC_UL200_SR200,200_.jpg",
          title:"Inside America's ",
          author:" by Mark R. Levin"
            },
  {
img:"https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
title:"  Bad Ones",
author:"by James Clear"
  }
,

  {
    img:"https://images-na.ssl-images-amazon.com/images/I/91bgFzUdDcL._AC_UL200_SR200,200_.jpg",
    title:"Billy Summers",
    author:"by Stephen King "
      }
    
,{
      img:"https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
      title:"Social Justice ",
      author:" by Mark R. Levin"
        }
      


] 





export const P = ({currentUser}) => {

    const [date, setDate]=useState(null);
    const [month, setMonth]=useState(null);
    const [year, setYear]=useState(null);
    const [day, setDay]=useState(null);

    useEffect(()=>{
        const myDate = new Date();
        const myMonth = myDate.toLocaleString('default', { month: 'long' });
        const myDate2 = myDate.getDate();
        const myYear = myDate.getFullYear();
        const myDay = myDate.toLocaleDateString('default', { weekday: 'long' });

        setMonth(myMonth);
        setDate(myDate2);
        setYear(myYear);
        setDay(myDay);
    },[])

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            window.location.reload();
        });
    }
   
    return (
        <div>
           
            <div >
                
            {!currentUser&&<>

             <BookList/>
                 
                 
                </>}
                {currentUser&&<div className='welcome-div'>

                    <h2>WELCOME</h2>
                    <h5>{currentUser}</h5>
                    <br></br>
                    <div className='date-section'>
                      <span>{date}</span>
                      <span>{month}</span>
                      <span>{year}</span>
                      <span>{day}</span>
                    </div>
                    <br></br>
                    <button className='btn btn-danger'
                    onClick={handleLogout}>LOGOUT</button>
                </div>} 
              
             </div>
        </div>
    )
}

const BookList=()=>{

  return(
<section className='BookList'>

{books.map((book)=>{

return(

 <Book  key={book.id} {...book}/> 
)



})}

</section>

  )


}






 const Book =(props)=>{
 const {img, title, author}= props

 return(
<article  className='Book'>

<img src={img} alt="" />
<h6>{title}</h6>
<p>{author}</p>
</article>


 )




 }