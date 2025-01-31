import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledIcon = styled("div")({
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(231, 231, 231, 0.8)",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const StyledListPaper = styled(Paper)(({ theme }) => ({
  flex: 1,
  padding: "8px",
  overflow: "auto",
  minHeight: "60vh",
  borderRadius: "12px",
  backgroundColor: "#f8fafc",
  border: "1px solid rgba(231, 231, 231, 0.8)",
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#cdcdcd",
    borderRadius: "4px",
    "&:hover": {
      background: "#a6a6a6",
    },
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginBottom: "8px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
  border: "1px solid rgba(231, 231, 231, 0.6)",
  transition: "all 0.2s ease-in-out",
  paddingRight: "100px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#f8fafc",
  },
}));

const URLText = styled(Typography)(({ theme }) => ({
  color: "#334155",
  fontSize: "0.95rem",
  fontWeight: 500,
  wordBreak: "break-word",
  whiteSpace: "normal",
  marginBottom: "4px",
}));

const ActionButtons = styled("div")({
  position: "absolute",
  right: "8px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  backgroundColor: "inherit",
  paddingLeft: "8px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: "100px",
  backgroundColor: "#0f172a",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.15)",
  "&:hover": {
    backgroundColor: "#1e293b",
    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.25)",
  },
}));

const URLRedirectManager = () => {
  const [urls, setUrls] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    const newUrls = inputValue.split(" ").filter((url) => url.trim());
    if (newUrls.length > 0) {
      setUrls([...urls, ...newUrls]);
      setInputValue("");
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  const handleDelete = (index) => {
    const newUrls = urls.filter((_, i) => i !== index);
    setUrls(newUrls);
  };

  return (
    <StyledPaper>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 3,
          fontWeight: 600,
          color: "#0f172a",
          letterSpacing: "-0.02em",
          fontSize: "1.5rem",
        }}
      >
        Redirect URLs
      </Typography>

      <StyledListPaper elevation={0}>
        <List sx={{ margin: "4px" }}>
          {urls.map((url, index) => (
            <StyledListItem key={index}>
              <URLText>
                {url}
              </URLText>
              <ActionButtons>
                <IconButton
                  onClick={() => handleCopy(url)}
                  sx={{
                    marginRight: 1,
                    color: "#64748b",
                    "&:hover": {
                      color: "#0f172a",
                      backgroundColor: "rgba(15, 23, 42, 0.08)",
                    },
                  }}
                >
                  <StyledIcon>
                    <ContentCopyIcon fontSize="small" />
                  </StyledIcon>
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(index)}
                  sx={{
                    color: "#64748b",
                    "&:hover": {
                      color: "#ef4444",
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                    },
                  }}
                >
                  <StyledIcon>
                    <DeleteIcon fontSize="small" />
                  </StyledIcon>
                </IconButton>
              </ActionButtons>
            </StyledListItem>
          ))}
        </List>
      </StyledListPaper>
      <Box sx={{ display: "flex", gap: 1.5, marginTop: 3 }}>
        <TextField
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter space-separated URLs"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              "&:hover fieldset": {
                borderColor: "#94a3b8",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0f172a",
              },
            },
          }}
        />
        <StyledButton variant="contained" onClick={handleAdd}>
          Add
        </StyledButton>
      </Box>
    </StyledPaper>
  );
};

export default URLRedirectManager;