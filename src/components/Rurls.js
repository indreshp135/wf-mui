import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@mui/material';
import { ContentCopy, Delete, ArrowForward } from 'lucide-react';

const URLRedirectManager = () => {
  const [urls, setUrls] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUrls = inputValue.split(' ').filter((url) => url.trim());
    if (newUrls.length > 0) {
      setUrls([...urls, ...newUrls]);
      setInputValue('');
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
    <Box className="w-full max-w-2xl mx-auto p-4">
      <Paper className="p-4">
        <Typography variant="h6" className="mb-4">
          Redirect URLs
        </Typography>

        <form onSubmit={handleSubmit} className="mb-4">
          <TextField
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter space-separated URLs"
            variant="outlined"
          />
        </form>

        <Paper className="max-h-96 overflow-y-auto">
          <List>
            {urls.map((url, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={url} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => handleCopy(url)}
                    className="mr-2"
                  >
                    <ContentCopy className="w-5 h-5" />
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleDelete(index)}>
                    <Delete className="w-5 h-5" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Paper>
    </Box>
  );
};

export default URLRedirectManager;
