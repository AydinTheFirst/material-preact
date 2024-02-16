import {
  Button,
  Collapse,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useState } from "preact/hooks";
import { FaBars } from "react-icons/fa";

export const App = () => {
  return (
    <>
      <Navbar />
      <Button color="primary" variant="contained">
        Hello World
      </Button>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  if (!isMobile) setOpen(true);

  return (
    <nav className={"p-3"}>
      <div className="container flex flex-wrap justify-between">
        <div className="flex items-center p-1">
          <img
            src="https://th.bing.com/th/id/R.6191323a4c9b67e8685eb4611776770e?rik=qn%2bts20h3yVNDw&pid=ImgRaw&r=0"
            alt=""
            width={50}
          />
          <h3 className="text-3xl font-bold">Pizza Slices</h3>
        </div>

        <div className="flex items-center md:hidden">
          <IconButton color="warning" onClick={() => setOpen(!open)}>
            <FaBars />
          </IconButton>
        </div>

        <Collapse in={open}>
          {isMobile && <hr />}
          <div className="flex flex-wrap md:flex-nowrap">
            <ListItem>
              <ListItemButton href="#simple-list">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#simple-list">
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#simple-list">
                <ListItemText primary="Services" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="#simple-list">
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <Button
                className="rounded-full"
                color="warning"
                variant="contained"
                fullWidth
              >
                Reservation
              </Button>
            </ListItem>
          </div>
        </Collapse>
      </div>
    </nav>
  );
};
