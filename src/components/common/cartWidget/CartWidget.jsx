import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export function CartWidget() {
  return (
    <StyledBadge badgeContent={4} color="secondary">
      <ShoppingCartRoundedIcon color="primary" fontSize="large" />
    </StyledBadge>
  );
}
