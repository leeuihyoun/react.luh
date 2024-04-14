import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; // 일부분만 갱신

// html 코드를 작성하려면  return() 안에 작성
// css를 사용하려면 위체 보이는 것처럼 import './App.js'
// class -> className : 자바스크립트에 이미 class라는 명령어가 있어서
// - 표시는 뺄셈으로 취급하기 때문에 대문자로 작성
// font-size ==> fontSize
// 변수를 사용할때는 {}로 이용
// style은 object 자료형으로 작성
//return() 안에 가장 바깥에는 하나의 태그만

//리액트 : 변수가 바뀌면 화면이 바뀌는 usestate(웹페이지를 다시 불러올 필요가 없음) import React,{useState} from 'react';
//리액트는 화면에 보여줄 값을 '변수'에 보과하지 않고 'state'에 보관
//변수는 값이 변경되어도 화면에 반영되지 않지만, useState라는 것을 사용하면 값이 바뀌면 화면도 따라서 바뀜(데이터바인딩)
//따라서, 변경될만한 값은 useState 로 보관하고, 변경이 안될 값은 변수에 보관


function App() {
  //여기에 자바스크립트 작성 가능
  let 변수 = '값' //html안에서 사용하려면 {}필요
  let[value, setValue] = useState('서버에서 실시간으로 받는 값')
  let[title,setTitle] = useState(['제목1','제목2','제목3','제목4'])
  let[dateTime, setDateTime] = useState(['2024.04.13','2024.04.12','2024.03.29','2024.02.28'])
  let[score, setScore] = useState([0, 0, 0, 0])
  let[modal,setModal] = useState(false)
  let[curIdx, setCurIdx] = useState(0);

  
  /**
   * 리액트에서 {} 안의 반복문은 for가 아니라 map으로 한다.
   * 왜냐하면 for(){}dptj wndrhkfghrk wndqhrehlrl Eoansdp
   */

  
  // return 안에는 html 코드
  return (
    <div className="App">
      <div className="black-nav" onClick={()=>{
        
        setModal(false)
      }}>
        <img src={logo} width={"100px"}height={"100px"}alt=''/>
        
        <h4 style={{color:'yellowgreen',fontSize:'20px'}}>{value}</h4>
      </div>
      {
        //map 가장 바깥 태그에 구분할 수 있는 key를 적어주기
      title.map(function(element,idx){
        return(
          <>
             <div className='list' key={idx}>
                  <h4 onClick={()=>{
                  setCurIdx(idx)
                  setModal(true)
               }}>{title[idx]} <span onClick={(e)=>{
                  e.stopPropagation()
                  setScore(()=>{
                    let src = [...score]
                    src[idx] += 1
                    return src
                  })
               
              }}>💖{score[idx]}</span></h4>
                <p>{dateTime[idx]}</p>
      </div>
          </>
        )

      })}
     
      {
        modal == true ? <Modal curIdx={curIdx} title={title} date={dateTime}/>: null
      }
      
      
  
     
    </div>
  );
  //Modal 컴포넌트 분리
  //코드가 길어지면 별도의 함수로  분리해서 '컴포넌트' 로 만들어 준다
  //return() 안에 html태그를 작성
  //사용하고자 하는 곳에 <함수명/>
  

}
function Modal(props){
  return(
    <>
    <div className='modal'>
      <h4>{props.title[props.curIdx]}</h4>
      <h4>{props.date[props.date]}</h4>
      <h4>상세 내용</h4>
    </div>
    </>
  )
}

export default App;
