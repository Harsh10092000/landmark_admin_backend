import { db } from "../connect.js";

// Helper to initialize the table if it doesn't exist
const initTable = () => {
    const q = `
        CREATE TABLE IF NOT EXISTS marketing_settings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            setting_key VARCHAR(50) UNIQUE NOT NULL,
            setting_value LONGTEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;
    db.query(q, (err) => {
        if (err) console.error("Error creating marketing_settings table:", err);
    });
};

initTable();

export const getQRConfig = (req, res) => {
    const q = "SELECT setting_value FROM marketing_settings WHERE setting_key = 'qr_config'";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(200).json(null);
        return res.status(200).json(JSON.parse(data[0].setting_value));
    });
};

export const saveQRConfig = (req, res) => {
    const config = JSON.stringify(req.body);
    const q = `
        INSERT INTO marketing_settings (setting_key, setting_value) 
        VALUES ('qr_config', ?) 
        ON DUPLICATE KEY UPDATE setting_value = ?
    `;
    db.query(q, [config, config], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Settings saved successfully");
    });
};
