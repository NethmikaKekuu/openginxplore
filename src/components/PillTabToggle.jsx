import { Box, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";

// Reusable pill-style tab switcher: a compact icon toggle on small screens,
// full labeled buttons on md+ screens. Used wherever a card needs a
// two-(or-more)-way tab switch (e.g. Departments/People, Bodies/People).
const PillTabToggle = ({ tabs, value, onChange, themeColor, textColor }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: { xs: "center", sm: "flex-start" } }}>
      {/* Toggle for xs and sm screens */}
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(e, newValue) => {
          if (newValue !== null) onChange(newValue);
        }}
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" },
          gap: 0,
          "& .MuiToggleButtonGroup-grouped": {
            border: `1px solid ${themeColor}`,
            borderRadius: "50px",
            "&:not(:first-of-type)": {
              borderLeft: `1px solid ${themeColor}`,
              marginLeft: "-1px",
            },
            "&:first-of-type": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            "&:last-of-type": {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        }}
      >
        {tabs.map(({ value: tabValue, label, icon: IconComponent }) => {
          const isActive = value === tabValue;
          return (
            <ToggleButton
              key={tabValue}
              value={tabValue}
              sx={{
                textTransform: "none",
                px: 2,
                py: 0.8,
                width: isActive ? "130px" : "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                backgroundColor: isActive ? themeColor : "transparent",
                color: isActive ? textColor : themeColor,
                fontFamily: "poppins",
                fontSize: "0.8rem",
                "&.Mui-selected": {
                  backgroundColor: themeColor,
                  color: textColor,
                  "&:hover": {
                    backgroundColor: themeColor,
                  },
                },
                "&:hover": {
                  backgroundColor: isActive ? themeColor : `${themeColor}20`,
                },
              }}
            >
              {isActive || !IconComponent ? label : <IconComponent sx={{ fontSize: 18 }} />}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>

      {/* Buttons for md and larger screens */}
      <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 2 }}>
        {tabs.map(({ value: tabValue, label }) => {
          const isActive = value === tabValue;
          return (
            <Button
              key={tabValue}
              variant={isActive ? "contained" : "outlined"}
              onClick={() => onChange(tabValue)}
              sx={{
                textTransform: "none",
                borderRadius: "50px",
                px: 3,
                py: 0.8,
                backgroundColor: isActive ? themeColor : "none",
                borderColor: themeColor,
                color: isActive ? textColor : themeColor,
                fontFamily: "poppins",
                fontSize: "1rem",
              }}
            >
              {label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default PillTabToggle;
