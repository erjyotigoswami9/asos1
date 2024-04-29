import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
export const Navbar1 = () => {
  
  let { showModalDivOnClick , setShowModalDivOnClick } = useContext(AuthContext) ;
  let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;
  let { womendataShow , setWomenDataShow} = useContext(AuthContext) ;
    let { mendataShow , setmenDataShow} = useContext(AuthContext) ;
  let dispatch = useDispatch() ;
  let stateCart = useSelector(state=>state.cartFunctionality) ;

 var tmId ;

  function handleInputSearchFirst(e){
      e.preventDefault() ;
      if(tmId){
        clearInterval(tmId) ;
      }
      // console.log(e.target.value) ; 
      setInputSearchvalue(e.target.value) ;
      // tmId = setTimeout(()=>{
      //   e.target.value = "" ;
      // },10000)
  }

  let navigate = useNavigate() ;

  function handleProfile(e){
      e.preventDefault() ;
      setInputSearchvalue("") ;
      navigate('/login') ;
  }
  function handleWishList(e){
    e.preventDefault() ;
    setInputSearchvalue("") ;
    navigate('/wishlist') ;
}
  function handleCart(e){
      e.preventDefault() ;
      setInputSearchvalue("") ;
      navigate('/cart') ;
  }

  return (
    <>
    
    <div className="firstNavbar">
        <div>
          <button>Marketplace</button>
          <button>Help &amp; FAQ's</button>
          <button> <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="country-logo"/> </button>
        </div>
    </div>
   
   <div className="secondNavbar">
    <div className="hr3DivMenu" ><button onClick={()=>setShowModalDivOnClick(!showModalDivOnClick)}><hr/><hr/><hr/></button></div>
    <div className="firstDivOfSecondNavbar">
        <div onClick={()=>{navigate('/'); setInputSearchvalue("")}}>
            asos
        </div>
        
        <div onClick={()=>{setWomenDataShow(!womendataShow); setmenDataShow(false)}}>WOMEN</div>
        <div onClick={()=>{setmenDataShow(!mendataShow) ; setWomenDataShow(false)}}>MEN</div>
        <div>
            <form className="formInputSearch" onClick={(e)=>{e.preventDefault(); }}>
                <input type="text" placeholder="Search for items & brands" onInput={(e)=>handleInputSearchFirst(e)} value={inputSearchvalue}/>
                <button>
                    <img width="20" height="15" src="data:image/png;base64,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" alt="search-logo"/>
                </button>
               
            </form>
            
        </div>
        <div>
            <img width="30" height="30" onClick={handleProfile} src="https://i.pinimg.com/736x/38/47/9c/38479c637a4ef9c5ced95ca66ffa2f41.jpg" alt="profile-logo"/>
        </div>
        <div>
            <img width="20" height="20" onClick={handleWishList} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD////7+/vr6+v5+fnZ2dn09PTx8fHV1dXf39+RkZH29vbl5eW6urp+fn7i4uLIyMjPz89OTk4fHx+9vb2vr68TExM2NjZtbW1bW1tERERiYmKHh4c9PT0JCQnDw8OdnZ0tLS2ioqImJiZmZmYYGBh4eHhKSkqrq6uOjo6hoaExMTGDg4PgWQnPAAALF0lEQVR4nN1dZ0PiQBANoTdBECmnEKp63P//fQcGNGXnbZ1kw/sqOHlky/QJAl3sPxa74cu4062HtX591BwPd0/L97X2/5FiO1n0ZptOd9AOa61B83kznL0tz+7lJDF9mjXrNSFa3eHXhzNBx9OuQwhqj8Y9d4KS2C6GhMxfhOOvd2tB08NwIBfUWznglMDrW1Mm9I5uNLeRdBqHioLqM2evcr0Yq9K7kexNzSQdNqr0Ygx6Vr/mDdtZW4/fFeHQYBF9SRenAJ2DJb/50EBqLHqpJWg/axgK6i4s+K02pvyuaKpznM5sBA1OhvymVvyu6Ciu1Z3e9sujbrRWe7b8rpgpaAIng42ew1hbFViabHsB+rIVNO+4EVSLtPitjQ+YPJ7h1eFkpcSoa5xtExfr5gchfdhNXb3AGJEqQYe/a4whIehke8Jk0TkqEXx2LPaCwVYk6NO9oL7CSv1wukLvCAWSGX7JmsJK/cMi9oKvjKC51FIxBLUlbnhiEnvB35Sglest+IsxIuj8jElilhC05BTUpAnqbn3N97D5EbTgFVSnruCd2vcbo5fd6WO+nb6uj9P9atGbdfpq37xTPKh9PBwMo9PkPD1eBO3Pqz8XQS21b9bFyqLKEu13IuF5/P5vo3JyzJSXaNgUC5o/KQnqir4rP2QaL8tX4vVfMfmUXzS7y+c+pGsuHJ/Q1T2P5Erzc/5r0pXTeQJCb1hK/R29YCtb0oMv9DveBA1lBvNL7gVIvrCZyPldMf+UvKFFF/+980dN0DGS7MlZ+vOveIG9aDgJpzbKmJbvo4c5ptccXF0jxfd3x1zTN/eDtqY7Yo2dH8nXgo7R8E1P7BUHI5Vspy9ohfy4g9/PoeO7Y+b7fNHm19ZcKTegl/Ojoq7Beu4ZiQ301RaJwkxjBY6Q+1akf28Vc4uCnvGQNT10QG/7MF6AtME0sIuZqRuAodkKvYNWN2M7g/ytgY6uBlV/Vts2/PBF/uvrIowwfyuoubLre2tBJ/J/B8GekaCaPUbaOjogD7ZeQLnuOw7EBioLtSX0UmnjH/Hvw4D4w8hVYF6m34SugrnUbiMYtl2snBgjzNA2/vcLYtMTDC3uwSzO0M4x1igEEFstYoaRQ7nQ8nRynN1xFhpuQoYCA9kG9J3Rktu6OhAeqCKGDbdyg4B0OrjbhDFEJ7eIoYG5hEHZLhv5V/XwKtjzAoZCP5UdxLdiqBYp0oHAnSZg6Djb6Iqj8AxwvlYuyFvEeYbGhhqC6DqucwjKe9TyDF2kGeUheIn/WATloso5hs53f4y8s6HNIyh3quUY2icXipHzlJim+ciQ3YlZhk6VjCSyRuqIS1BWhcoytEkSw2iVJCjDsM8mN3hLCRrIv2CKjJKYYchyVdyQ8ge51tcSWEGGdj4vjKS+Ye3kQhgBhi1OwcmXqBhgMsMOMGQ7Sb/x6xBjfYUZB3CaIYemmMCPFeXQhSDAukEzZFC6k7i/REd+PBJNkiHvNgx+PCmc59kVO5Ih7/YI7m4Gx06SPJ5IhjP5ly3xvX54inoSWJEMI27R30oj74F9xZFkyKho3NFkP86uqFMMuSynBJZcBmgKTYqhmxgJhmoNhhWeKYbughU03PvXBBhTDF17gksDyZCh1LUcDAmGjOZvwZgRDB//HT7OPtw8PEPypCnitigE5H1YxI1fCDoUQ3alvyiMKIZ8XtqC0acYukyMKBO09WSQpOsl5iRDTo93kTiQDBki+KUgIhk+imL6QjKsMfe3KQp1miFrOKEwIJ/3Y1wX6VB+kZGZohABho9x1HQAwyL8ifyoIYaPsBEPkCF70KQADCHD8AFcNX3I8AEMqGyRU5ZhEVEFXmRzWbMMG2U/oDVqEoY1hYptr5Er8soxZI90MyOXNZ/PoK32pZ9Pms8z/Cz7Ia2Qr+rMMwzLfkgbrHJ0RLn6UdmPaQFBYa6AYYUNjI88G2HNjE1ddbkQ1VaLGLInf3FBWJUurF2Lyn5UQwgryMT1h9UMs4kbSIgZ8ie4MWAv7oxDVMly50dygGjhQBTPVtC/TzQdmFGl+pVz2EyJ9lNnsi1G1Rz8RN3/tSEW0YyAOxfbMd7ELGrfLTeIlxiV+8h6eCcIxoYS1TSjSnkLROOG1s11SHSTYqli5QHVJeleP0IVk+fa1vkKqhvWb4Ec1X+kIkYG2arstzTnTH2kEltxTzViTOqe1GtuVUEFp/pcpUupqSYyjKWerkB2FEsHKMjWl957+ck2TdknJzus/BX+X29Atmpr55JlyQ4rXuvgZCs2QYmjyE0Vw+NIBqWNiv3a9M/B1f3AGnTrY7F9S7cC9TSRiG6vGYptvz3dlIu3btcQoMMWFcmmv9IoohxLE6C3c0R+6S/5nZZ3Jv+E7jmNEkrojqNtzyiCNwitPtD0usXTe8gQoPNxiEO8gvjbHX2PgsOojZ/sVATfddal0hqoC7O8+xToHm3Z7dcZyIazNbUYPeqM68W9iIY4qFUboBbOHlCkdVH1DGA0SKv0vDdafdbJrEQDGkq2NNAe0kl2QjNAIqZnVwLqSqwVL9ujcRclhk/R/qnrVcBu0XCMsnw3e7S0tHs7w5la5cSl3tHC6uvXv8LBM90S/KhL1FPaSKWEU5nqhevhcF5G3+xx4FvsF6zBoXu+1jYt0QZGZq3gux/d8zYN5PEIP+bmbknA+QMDm0PhHU5UKizXFk4fsAytnCHFgkKocMpX17YGZg/n4RSR9s7+BFMowMl8EQi8UZzUaa3hIukzuzbwrERX2wQPXmZ1+SOHhcujDo8YY7QY8VhNl3E/PPIncigpBTwY1W1IDP+YTN0m8NJx7TLCU0pZSk/hULO++0QYPAvPvTl1hDOG6hztkCZw5o/16LQMzvAatlZkxJjDWaUNp/sC/5xs9dhTPAbWoTmFJ7xzttHBEw2djeTAe543wwcPiovcCKGGxMXgTpiExrYbNYoe13gFv2sBX4wOVGE6meCKIkJDS+jasD7m4NjLdjFx6BW02CxNUqipORjnqQaJumHzGPCwLrKQHlqMFuoN/L/FNkCCi8k4gwoN2S485AVNt4aZ4g8JRk4fXwXQzR6aHOpQJ+QZYYaBVSt9ipBgOekDE6rO4Ru6DipEsLREni00p/QGLSCCBd3zIrw6W1nohuX3OiPAC0zZGbZGBLsl9+CGF6MqRUSw/FpWqCmrUUQEfejkCC1Glb2IVroffX/h3S+/NFD405d+RzB8IrvKkF8kKuDh1YBCYJLMYqTf+lTC+gHsfpjrguIhftVbvQMNrkV74JFXzS+CQTAHFEmlBCnvvhHEPn8iMRJtX/8I4pxUYXIr2rw+EsRpIQLdawuCL34SDIIjoJhXTkA6rK8ELxTBU2cnSwC/obc1qwE2g9KJfkBh95lgAO2EpNEPoi/+LtEYaC/+6m+gfszr4vhvgDy49n0y4Jz8SCUGwQDt5h54oA8kP+xBGeb0RReHF2mL0PsuHDeAFPjrLqPtifJ9MqoAFA8gz6JKjf5oFo0luU01C5dKBg5qCFGJfkYJ4IQGASRF5h4Cp6Xk4UH9rS5wclEWZcQHrQHrQDLwxTGqCVQQmYYPvnsTTGF8MYFR2U9qDLr3VAphheef4nKJO/SixZ4Bp+HF8N8ihJAfqFWxJ0jAHLhaJTozSnCGyZpJ10ZlgZXwSuoyWaCiqcpvwhi087dCzZgh6A5iD7AJY1BhtKjsB3MHsbFY9fFgKQiTYz1r42eHvYBggT0ZikBeB3+EgaApZJ0ajYq51hSQuTJKb4vmHmlH+IMoM2kk4xVt+ceriIT2VqB39D/dcInwLLivBAAAAABJRU5ErkJggg==" alt="wishlist-logo"/>
        </div>
        <div>
            <img width="40" height="40" onClick={handleCart} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2JG6mWfosD-N23Hpz6CzFim2_yzebL_ndA&s" alt="bag-logo"/>
        </div>
    </div>
    <div className="secondDivOfSecondNavbar">
      <div>
        <div onClick={()=>{navigate('/'); setInputSearchvalue("")}}>asos</div>
        <div>
            <img width="30" height="30" onClick={()=>{navigate('/searchitem'); setInputSearchvalue("")}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55znokUZz6S2FV1y4zqPDcu1WUOalMC5Spg&s" alt="search-logo" />
            <img width="30" height="30" onClick={handleProfile} src="https://i.pinimg.com/736x/38/47/9c/38479c637a4ef9c5ced95ca66ffa2f41.jpg" alt="profile-logo"/>
            <img width="20" height="20" onClick={handleWishList} src="data:image/png;base64,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" alt="wishlist-logo"/>
            <img width="40" height="40" onClick={handleCart} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2JG6mWfosD-N23Hpz6CzFim2_yzebL_ndA&s" alt="bag-logo"/>
       
        </div>
      </div>
    </div>
   </div>

    </>
  )
}
