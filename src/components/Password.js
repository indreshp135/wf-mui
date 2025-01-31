import React, { useState } from "react";
import {
    Box,
    TextField,
    IconButton,
    Paper,
    Typography,
    Button,
    InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff, Refresh } from "@mui/icons-material";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(231, 231, 231, 0.8)",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
}));

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

const ForgotPassword = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [generated, setGenerated] = useState(false);
    const [message, setMessage] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setMessage("");
        setGenerated(false);
    };

    const generatePassword = () => {
        const randomPassword = Math.random().toString(36).slice(-8);
        setPassword(randomPassword);
        setGenerated(true);
        setMessage("New password generated!");
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!generated && !password) { // Check if neither generated nor manually entered
            setMessage("Please generate a password or enter one manually.");
            return;
        }

        console.log("Password:", password);
        setMessage("Password reset request sent (mock).");
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
                    textAlign: "center",
                }}
            >
                Password
            </Typography>

            <TextField
                fullWidth
                label="New Password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTogglePasswordVisibility}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            <IconButton onClick={generatePassword}>
                                <Refresh />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                type={showPassword ? "text" : "password"}
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

            {message && (
                <Typography
                    variant="body2"
                    color={message.startsWith("Password reset") ? "green" : "red"}
                    sx={{ marginTop: 2, textAlign: "center" }}
                >
                    {message}
                </Typography>
            )}

        </StyledPaper>
    );
};

export default ForgotPassword;
