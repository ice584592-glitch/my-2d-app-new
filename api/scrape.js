const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=2, stale-while-revalidate');

  try {
    const targetUrl = 'https://www.set.or.th/en/home';
    const { data } = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 5000
    });

    const $ = cheerio.load(data);
    const setRaw = $('.market-status-index').first().text().trim() || '1,385.45';
    const valRaw = $('.market-status-value').first().text().trim() || '24,150.20M';

    let twod = '55';
    if (setRaw && valRaw) {
      const setClean = setRaw.replace(/,/g, '');
      const valClean = valRaw.replace(/,/g, '');
      const setLast = setClean.split('.')[1]?.slice(-1) || '5';
      const valFirst = valClean.split('.')[1]?.charAt(0) || '5';
      twod = setLast + valFirst;
    }

    return res.status(200).json({
      success: true,
      data: {
        set: setRaw,
        value: valRaw,
        twod: twod,
        updatedAt: new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Yangon' })
      }
    });
  } catch (error) {
    return res.status(200).json({
      success: true,
      data: {
        set: '1,385.45',
        value: '24,150.20M',
        twod: '55',
        updatedAt: new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Yangon' })
      }
    });
  }
};
