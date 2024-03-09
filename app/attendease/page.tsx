'use client'
import { useState, useEffect } from 'react';

export default function AttendanceTracker() {
    const [totalDays, setTotalDays] = useState<string>("0");
    const [absentCount, setAbsentCount] = useState<string>("0");
    const [attendancePercentage, setAttendancePercentage] = useState<number>(100);

    useEffect(() => {
        
        const storedTotalDays = parseInt(localStorage.getItem('totalDays') || "0", 10);
        const storedAbsentCount = parseInt(localStorage.getItem('absentCount') || "0", 10);
        
        if (!isNaN(storedTotalDays) && !isNaN(storedAbsentCount)) {
            setTotalDays(storedTotalDays.toString());
            setAbsentCount(storedAbsentCount.toString());
            updateAttendancePercentage(storedTotalDays, storedAbsentCount);
        }
    }, []);

    const updateAttendancePercentage = (totalDays: number, absentCount: number) => {
        const percentage = ((totalDays - absentCount) * 100) / totalDays;
        setAttendancePercentage(percentage);
    };

    const handleStartAttendance = () => {
        const parsedTotalDays = parseInt(totalDays, 10);
        if (parsedTotalDays <= 0 || isNaN(parsedTotalDays)) {
            alert('Total working days must be greater than zero');
            return;
        }
        localStorage.setItem('totalDays', parsedTotalDays.toString());
        localStorage.setItem('absentCount', "0");
        setAbsentCount("0");
        updateAttendancePercentage(parsedTotalDays, 0);
    };

    const handleMarkAbsent = () => {
        const parsedTotalDays = parseInt(totalDays, 10);
        if (parsedTotalDays <= 0 || isNaN(parsedTotalDays)) {
            alert('Enter total working days before marking absence');
            return;
        }
        const newAbsentCount = parseInt(absentCount, 10) + 1;
        localStorage.setItem('absentCount', newAbsentCount.toString());
        setAbsentCount(newAbsentCount.toString());
        updateAttendancePercentage(parsedTotalDays, newAbsentCount);
    };

    return (
        <div style={{maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9"}}>
            <h1 style={{textAlign: "center", marginBottom: "20px"}}>Attendance Tracker</h1>
            <div style={{marginBottom: "15px"}}>
                <label style={{display: "block", marginBottom: "5px"}}>Total Working Days:</label>
                <input 
                    type="number" 
                    value={totalDays} 
                    onChange={(e) => setTotalDays(e.target.value)} 
                    placeholder="Enter Total Working Days" 
                    style={{width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px"}}
                />
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                <button style={{padding: "10px 20px", border: "none", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer", transition: "background-color 0.3s ease"}}
                    onClick={handleStartAttendance}>Start Attendance</button>
                <button style={{padding: "10px 20px", border: "none", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer", transition: "background-color 0.3s ease"}}
                    onClick={handleMarkAbsent}>Mark Absent</button>
            </div>
            <div>
                <p>Attendance Percentage: {attendancePercentage.toFixed(2)}%</p>
                <p>Absent Days: {absentCount}</p>
            </div>
        </div>
    );
}