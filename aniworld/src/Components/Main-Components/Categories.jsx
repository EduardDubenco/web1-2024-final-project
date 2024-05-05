import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CategoriesButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const animeCategories = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Adventure' },
        { id: 3, name: 'Comedy' },
        { id: 4, name: 'Drama' },
        { id: 5, name: 'Fantasy' },
        { id: 6, name: 'Romance' },
    ];

    return (
        <>
            <Button variant="contained" onClick={handleOpen}
                    sx={{bgcolor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 0,
                        },
                        border: 'transparent',
                        boxShadow: 0,
            }}>
                Categories
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: '#23252B',
                    border: '1px solid #F47521',
                    boxShadow: 24,
                    p: 4,
                    color: 'white',

                }}>
                    <Typography id="modal-title" variant="h6">
                        Anime Categories
                    </Typography>
                    <Typography id="modal-description" variant="body2">
                        Select a category:
                    </Typography>
                    {animeCategories.map((category) => (
                        <Button sx={{
                            color: '#F47521'
                        }} key={category.id}>{category.name}</Button>
                    ))}
                </Box>
            </Modal>
        </>
    );
};

export default CategoriesButton;
