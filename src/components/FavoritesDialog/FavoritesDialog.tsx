import { useEffect, useState } from "react";
import favIcon from "./favIcon.png"; // Adjust the path as necessary
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import styled from "styled-components";
import useWeatherStore from "../../store/store";

const FavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const FavoritesDialog = () => {
  const [selectedFavorite, setSelectedFavorite] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const setSelectedCity = useWeatherStore((state) => state.setSelectedCity);
  const favorites = useWeatherStore((state) => state.favorites);
  const setFavorites = useWeatherStore((state) => state.setFavorites);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (e) {
        console.error("Error parsing favorites from localStorage", e);
      }
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFavoriteClick = (fav: any) => {
    setSelectedFavorite(fav);
    handleClose();
  };
  useEffect(() => {
    if (selectedFavorite) setSelectedCity(selectedFavorite);
  }, [selectedFavorite]);
  
  return favorites?.length > 0 ? (
    <>
      <FavButton onClick={handleOpen}>
        <img src={favIcon} alt="Favorites" width={24} height={24} />
      </FavButton>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Favorites</DialogTitle>
        <DialogContent>
          <List>
            {favorites.map((fav, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton onClick={() => handleFavoriteClick(fav)}>
                  {fav.display_name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button onClick={handleClose}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  ) : null;
};

export default FavoritesDialog;
