import React from 'react';

// In Search.tsx

  interface SearchProps {
    searchInput: string;
    searchChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    sendRequestToBackend: () => void;
  }
  

 
const searchInputStyle= {
  display: 'flex',
  flexDirection: 'column' as 'column',
  // margin: '100px 100px',
  width: '350px'
}
const inputStyles = {
  backgroundColor: 'transparent',
  height: '40px',
  borderRadius: '50px',
  textIndent: '8px',
  border: '2px solid white',
  marginTop: '30px',
  color: 'white',
  '::placeholder': {
    color: 'red',}
}
function Search({searchInput,apiInput, searchChangeHandler,apiSearchHandler,sendRequestToBackend} : {searchInput:string, apiInput:string, searchChangeHandler: Function,sendRequestToBackend:Function, apiSearchHandler:Function}) {

function handleKeyDown(event:any){
  if(event.keyCode === 13)
  sendRequestToBackend()

}

  return (
    <div style={searchInputStyle}>
    <label htmlFor="api">Enter Your Own Api : </label>
    {/* @ts-ignore */}
    <input style={inputStyles} onChange={apiSearchHandler} placeholder='Enter a link here' type="text" id='api' value={apiInput} onKeyDown={handleKeyDown}/>
    <br />
    <label htmlFor="search"> </label>
    {/* @ts-ignore */}
    <input style={inputStyles} onChange={searchChangeHandler} placeholder='eg: Beirut' type="text" id='search' value={searchInput} onKeyDown={handleKeyDown}/>
    </div>
    )
}

export default Search