const express = require('express');
const router = express.Router();
const { cekKey } = require('../database/db'); 
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');
var creator = 'BambangGans'

varloghandler = {
  mem: {
      status: false,
    	code: 403,
    	message: 'mohon masukkan jumlah anggota nya',
    	maintanied_by: `${creator}`
    },
  gcname: {
      status: false,
    	code: 403,
    	message: 'mohon masukkan nama grupnya',
    	maintanied_by: `${creator}`
    },
    name: {
      status: false,
    	code: 403,
    	message: 'mohon masukkan namanya',
    	maintanied_by: `${creator}`
    },
   text: {
     status: false,
    	code: 403,
    	message: 'mohon Masukkan Text',
    	maintanied_by: `${creator}`
    },
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, Silahkan Login First untuk mendapatkan apikey anda',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

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

router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/caklontong', cakLontong);

router.get('/quotes', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/ptl', ptl);

router.get('/motivasi', motivasi);

router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!text) return res.json(loghandler.nottex)
   
     const check = await cekKey(apikey);
     var hasil = await getBuffer(`https://api.zeks.me/api/naruto?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/blekpink.png', hasil)

         res.sendFile(__path + '/tmp/blekpink.png')
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.apikey)
}
})

module.exports = router;
