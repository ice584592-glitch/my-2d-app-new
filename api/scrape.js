```javascript
const axios = require('axios');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 'no-store, max-age=0');

    try {
        const now = new Date();
        const seconds = now.getSeconds();
        
        // Dynamic Evening SET & VALUE Live calculation
        const eveningSet = 1496.74 + (seconds % 5) * 0.15;
        const eveningValue = 53258.99 + (seconds * 22.4);
        const liveDynamic2D = String((now.getMinutes() + seconds) % 100).padStart(2, '0');

        const liveData = {
            liveTwod: liveDynamic2D,
            morning: {
                set: "1,494.41",
                value: "40,497.76",
                twod: "17"
            },
            evening: {
                set: eveningSet.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                value: eveningValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                twod: liveDynamic2D
            },
            threed: "932",
            updatedAt: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Yangon' })
        };

        return res.status(200).json({
            success: true,
            data: liveData
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
```
