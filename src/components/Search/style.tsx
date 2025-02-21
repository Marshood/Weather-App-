
import styled from "styled-components"

export const SearchWrapper = styled.header`
display:flex;
flex-direction: row;
align-items: center;
justify-content:center; 
text-align: center;

gap: 16px;
color: white;
padding: 8px;
text-align: center;

`

export const Title = styled.h1`
  margin: 0;
  color:black;
  font-size: 1.5rem;
`
export const SearchButton = styled.button`
padding: 10px 20px;
font-size: 1em;
background-color: #4a90e2;
color: white;
border: none;
border-radius: 0 4px 4px 0;
cursor: pointer;

&:hover {
  background-color: #357abd;
}
`