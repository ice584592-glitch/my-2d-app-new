const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=30');

    try {
        // ကိုယ်ချိတ်ချင်တဲ့ Website URL ကို ဒီနေရာမှာ ထည့်နိုင်ပါတယ်
        const targetUrl = 'https://live.thai2d.com/'; 
        
        // ယာယီအချက်အလက် (သို့မဟုတ် Web Scraping လုပ်ရန်)
        const liveSet = "1,385.45";
        const liveValue = "12,155.00";
        const twodResult = "55";
        const threedResult = "849";

        return res.status(200).json({
            success: true,
            data: {
                set: liveSet,
                value: liveValue,
                twod: twodResult,
                threed: threedResult,
                updatedAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Yangon' })
            }
        });
    } catch (error) {
        return res.status(200).json({
            success: true,
            data: {
                set: "1,234.56",
                value: "10,230.00",
                twod: "99",
                threed: "3D အချက်အလက်",
                updatedAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Yangon' })
            }
        });
    }
};
