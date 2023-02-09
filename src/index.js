const express = require('express')
const router = require('express').Router()
const encuestas = require('./controls/encuestas')


const {upload} = require('./middlewares/imageStorage')

router.post('',  encuestas.registrarEncuesta)
router.get('',  encuestas.formRegistro)


module.exports = router;