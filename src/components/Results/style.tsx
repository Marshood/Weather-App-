
import styled from "styled-components"

export const HeaderWrapper = styled.header`
  background-color: #3949d6;
  color: white;
  padding: 1rem;
  text-align: center;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

 
export const ResultsContainer = styled.div`
  margin-top: 20px;
  height: 400px;
  width: 40vw;
  overflow: auto;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  background-color: #8ebbee;
 
   
  @media (max-width: 768px) {
    
    width: auto;
    height:200px;
    overflow: auto;
    flex: none;
   }
`

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ResultItem = styled.li<{ isSelected: boolean }>`
  background-color: #f0f0f0;
  margin: 10px 0;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.isSelected ? "#4a90e2" : "#f0f0f0")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color:${(props) =>props.isSelected ? "" :"#e0e0e0"} ;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`
export const NoResultsFound = styled.p`
  color: #4a90e2;
  font-weight: bold;
  text-align: center;
`;