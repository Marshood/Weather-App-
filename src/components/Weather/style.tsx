import styled from "styled-components"

export const WeatherContainer = styled.div`
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
export const CityName = styled.h2`
  color: #333;
  margin-bottom: 10px;
`

export const WeatherInfo = styled.p`
  font-size: 1.2em;
  color: #666;
`

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`

export const FavoriteButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  
  &:hover {
    background-color: #005bb5;
  }
`;