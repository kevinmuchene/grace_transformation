import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { CopyrightIcon } from "lucide-react";

export default function CopyrightPopover({copyright}: {copyright:string}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "copyright-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} startIcon={<CopyrightIcon/>} onClick={handleClick}>
        Copyright
      </Button>
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <p className="text-sm p-2 italic">{copyright}</p>
      </Popover>
    </div>
  );
}
