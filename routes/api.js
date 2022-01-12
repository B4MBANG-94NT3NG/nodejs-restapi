__path = process.cwd()
const express = require('express');
const router = express.Router();
const { cekKey } = require('../database/db'); 
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { getBuffer } = require(__path + '/lib/functions.js');
const fs = require('fs');
const fetch = require('node-fetch');
const { youtubePlay, youtubeMp4, youtubeMp3, igdownloader, twitterdownloader } = require('../controllers/yt');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi, indonesia, malaysia, thailand, vietnam, korea, japan, naruto, china, tiktok, asupan, geayubi, ukhty, rikagusriani, anony, hijaber, joker, harley, cecan, santuy, bocil } = require('../controllers/randomtext');

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    res.send({status: 200, apikey: apikey, response: 'Active'});
});

router.get('/textprome/matrix', async(req, res ) => {
   const apikey = req.query.apikey;
   const text = req.query.text;
    if (text ==== undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
   const hasil = await getBuffer(`https://api.zeks.me/api/matrix?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)
         res.sendFile(__path + '/tmp/matrix.png')
       .catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
})
    
router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/caklontong', cakLontong);

router.get('/quotes', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/ptl', ptl);

router.get('/motivasi', motivasi);

router.get('/cecan/indonesia', indonesia);

router.get('/cecan/malaysia', malaysia);

router.get('/cecan/korea', korea);

router.get('/cecan/thailand', thailand);

router.get('/cecan/jepang', japan);

router.get('/cecan/vietnam', vietnam);

router.get('/asupan/tiktok', tiktok);

router.get('/cecan/china', china);

router.get('/naruto', naruto);

router.get('/asupan/gheayubi', geayubi);

router.get('/asupan/santuy', santuy);

router.get('/asupan/bocil', bocil);

router.get('/asupan/rikagusriani', rikagusriani);

router.get('/asupan/ukhty', ukhty);

router.get('/asupan/cecan', cecan);

router.get('/asupan/harley', harley);

router.get('/asupan/hijaber', hijaber);

router.get('/asupan/anony', anony);

router.get('/asupan/joker', joker);

router.get('/igdl', igdownloader);

router.get('/twitter', twitterdownloader);
/*router.get('/otakudesu', otakudesu);

router.get('/pinterest', pinterest);

router.get('/igstory', igstory);

router.get('/igstalk', igstalk);

router.get('/igdl', igdownloader);

router.get('/twitter', twitterdownloader);*/

module.exports = router;
