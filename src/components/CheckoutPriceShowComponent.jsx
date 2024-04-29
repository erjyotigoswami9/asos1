import React, { useContext } from 'react'
import '../styles/mainStyleFile.css'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const CheckoutPriceShowComponent = () => {
  
  let { formDetails1, setFormDetails1 } = useContext(AuthContext) ;
  let navigate = useNavigate() ;
  function cancelFunc(){
    navigate('/cart') ;
  }
  function goFunc(){
    navigate('/upi') ;
  }
  return (
    <div className="paymentDiv">
    <div className="paymentDiv21">
      <div>
          <h3>Order Details</h3>
          <img width="200" height="150" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///9hZWj29vZdYGORkpNYW17AwcL6+vpVWl1fY2ZVWFthYmT///xXWFrW1tZaX2KnqKqFh4mdnZ52eHp7fX7s7OzQ0NLc3N1RVVmAg4dobG/y8vJjZGhUVVdwdHdSV1bm5+iys7a6urqwsLDJyclKT1NISEhpaGmOjpDCw8aUl5lKUFRwcHBdXl1NTE2EhISeoqYfalTDAAAI5klEQVR4nO2dDXuaOhuACREDZBQQVArCS61fc9r5/3/dmw+woNJS15ak57mvc6pT2HIvX09CkhkGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0J9yLFmuzKGT8iVkcWLVJM9Dp+YLMBFGZxxvMnR6Pp+Jj5ok86ET9Olgp2WIT0Mn6LPJ8pYgcsKhU/TZmBeGeDR0ij4ZYkTtUmqNh07Sp/Pcbmnc6dAJ+nRKu1UNi6HT8wW0stD/iV3+qVlMk3Lo5HwBD43W1NkOnZqvgDSiNl/voI10fL57VbQfvjVFnw8xbzG2Xg1vXqDNmGocefktXgURyvNb1+BROXTi+xC67ejlI+Dk99DJf5+99b5IJ4uF+qOqMvknwQWOhjZ4jyr8xMmHsRxuuFhnQyu8w4iPdOlxX3b1GV2Q2QEvkAYdiTD07oo6SaSJIYvJ7qxLog5rYYif7rw5dTQxvHv8HoOhCtw2fJh10A5F9TXcv87nt3FxaySir6Hl3A5VHbQum9fpa7h0O0h2rev0NewYMF6NCDU27Im+hr+6aV2ns2HH1T/G0DCnHbQv09fw6eXmxA0jbl2nr2H3xMZP6Q9Pf+zbJOiHxDTGvIv2ZRob9gQMleC/ZPjRyTZDO0NjeqD9cBw6E3foZjjx+hsexB26GY7XltcL28rl6hrNDIkxG/dGVlrNDO8ADJUADN9EN0OyD3vyNyzFHboZBq7TE1o9+dXN8NnDffHkWF83Q+N50peTfLStneFHEF2+doZvTJPenjPVzvDD/HzDCCFHK8Nl0Jdn8YiGjOLHR50MnxK/Hxi7j+x6k+VhiiKNDAPLwT27fJ/3+CYJoyhGGhmaYRH1JOYTp4TsrDTCF4bTYLT8fo03qAxN8+MTUabxWKSXeThPfOwd7pjV+jKkIfmYIRFXm0aIigjNWt8gsUxOpb0LfF1bbdhbsn7cHUbFRW8RiqWOWKVtYMzQQZWhzEizys9zvvIPyPkZPntnmBkRV0UpKwAP/MLqprGbFiwX8X4gm1uwUlo4S5HAzGQpJ/WKBPnKvUlzmYL8lfzI+Mt87Jn8BS+5pVWkTlE4Si0cHuHCT8d1NplCjOVQvRojM+r0S11iEvOsbIROgfyH15vTArOKmWKVqqExQmnhj88FTfxkL6wr4D7yB3+tPpGiZsadCDd00pnw4//t2e+1jXARv//HfiMjVqxkS0NYhvE8KsfPwSkIJoH4n70LTuzHaRKssrqSMkNRH6UhMWQhXSUFa1tx5Km1LnqUIm4oSh9PGQnodmtZeEsLy7IOB4tuD+x1S62U4mXV/HBDfnnTkExTh/1e2yhf8WxXB1YPnWJMZA00jDK2i6I4HCiNaHSgUcEEC0qLw4IWBbJ2U9He8CzLLvKQxIWDIhRtJ/xvYKqO4winhbvklYqwjFl6OGLBKVOiaWGl2+JsuOWGhZ+seNKrFtcI8dnQeD4yw/Rgpez9NMtUMmTpGhPZTAYbz3JRyrBd10/TBKEkSR3XZQNdl/2SfbQRQadsOo242NJ8LurkQ847R7Q9lKIlUszwPAKezmada2crVs1mJKbUkk+hTEopj2Y8taJuzr/NYlC6lZkVSkN/984dA/CPhnkp3iw9YeggdQrnmbZhlpny5Yqbm9XjXBZKvvGC7y5xVYrWapqGc2Qn4viLyL1cDPWyunVz9Fe+pmLRtKPmhu+mIRtl+AF/84gvlrO5NwWNSDY71TEo9269+WKasxh/UIdh13ivFD9X1aZvX61oraZpmHQZ2rJ+PezDi86ANyzZUfQTKJkZStJ8fthlWK0tWf7B2H5s3iwm+AtRCelR1Q3tffIQi16OePy91Syw3DDwq78FBTsKQS9DkT1zWd38hiIzrE9e8MrvT3s/ehmKaZdp5XJ8PYvn1y+TLmRNVff4mj6GVTcQVkeBiFC0esQWip2yVTlWk9uGF9ueLBnRxEcRuSB7Xxsu5SE2zlbVSmhcGTp8joWgC+pgJcJVmazazXqru1Jza5dcGCKf5U/sXyraMhNJIYvvwhWKREZryL53l+23cGnIkru/EkSO6AsIcxKKi4XHS/NE7lrAj2/+CUNzZYj8y6CUQ4tq/juthrpuYKxc+dVR7TNOrg1vQnEkFbMtlR2EFVTbMHNFo7WavoaUViOHbCHD0PrgSFvVaK2mvyGuprKnlDZrqPLHnDUj73W3oSiX1Xi3qbiwyuHS3o/mCDj033yOT71rRU/daK2maWgG7626DOSFU1oFPSrOrV1y31xbacmZmVThaK3mztnE0uaKSkdrNffOl5bYtVwNjsG625AFcO0JfnURhv8UOavuefcZQ/VC0/HtqVR14IbIum+ymhuOX3RY18ZGCqM5+Rjy7nLneaobPldjvLzftrWafLt/Wk6inNJc9Xp475l7DrYsTF+HHAozsd/X6WLBslCDTn+X8KFs3+0yZ/giRHTMVW9JDd53ryLL7jpU6E0Sa1/es0F6CD7YkLYbVAAAAAAAAAAAAAAAAAAAAODHcXViOaAu2ey3fKQ0LxniAeF0Pp+X8lSa6tBkws9TLueqPz68yXJto3XBlwX/sZMkf9kRw3h+8fL1esLeZZv/cTZz45gnSbLe6ff4YsV3wk4jylJu82VeD/nEMJ4s/s6KmeF5Hxvl385z1ZdfXoPEYrVszTxdsZBtnzJDl+8fma9XDUMn4J/t0WApvZPpWhpEYW04OnBDwhvSYtc2NKS/XpRruax5x0pkciKmOeZKMg+NMDam+eT3eDxmTZFzIlm2Wmux9qtJ09B3N5vNy8kgTUOviOM4YmUY2ezbtX7/6Hr5MuN9O5dhpdTMsjGvkU+e+PJvzCpovXTdOZkm+1bp3Ra3MNdyIV+6k/Xwl/EYnQ23E2bYroeh8iu9r4hF0zHnWZXItqSoDZesF7w01K8tZRUxLLNVwvcZJq+9hTefP0w2AW9rn0oe02S1oTNoau+ijDabXKRe9hbLvDSejnnu/eU1cOqJfzh38yB7fGP5Ug6X1LshFxt93g7M9AvbAAAAAAAAAAAAAAAAAAAAAAAAgP8a/wdivMsUvqtfiQAAAABJRU5ErkJggg==" alt="order-logo"/>
      </div>
     
      <table>
        <tbody>
        <tr>
            <td>Amount</td>
            <td>£ {formDetails1.price}</td>
        </tr>
        <tr>
            <td>Order Id</td>
            <td>{Date.now()}</td>
        </tr>
        <tr>
            <td>Mobile</td>
            <td>{formDetails1.phone}</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>{formDetails1.address}<br/>{formDetails1.city}<br/>{formDetails1.state}<br/>{formDetails1.country}<br/>{formDetails1.zicode}</td>
        </tr>
        </tbody>
      </table>
          <br/>
          <div className="confirmOrCancelDiv">
          <button className="confirmOrderDiv" onClick={goFunc}> CONFIRM </button>
          <button className="coancelOrderDiv" onClick={cancelFunc}> CANCEL </button>
        </div>
    </div>
    <br/><br/><br/><br/>
 </div>

  )
}
