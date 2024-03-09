'use client'
// Notepad.tsx

import { useState, ChangeEvent } from 'react';

const Notepad = () => {
    const [notes, setNotes] = useState<string>('');

    const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value);
        localStorage.setItem('notes', e.target.value);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <h3 style={{ marginBottom: '10px' }}>Notepad</h3>
            <textarea
                value={notes}
                onChange={handleNoteChange}
                placeholder="Write your notes here..."
                style={{ width: '200px', height: '150px', resize: 'none', border: 'none', outline: 'none', fontFamily: 'Arial, sans-serif' }}
            ></textarea>
        </div>
    );
};

export default Notepad;
