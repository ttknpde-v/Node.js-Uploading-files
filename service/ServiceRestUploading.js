class ServiceRestUploading {
    #express
    #multer
    #util
    #path
    #fs
    constructor() {
        this.#express = require('express')
        this.#multer = require('multer')
        this.#util = require('util')
        this.#path = require('path')
        this.#fs = require('fs')
    }

    get express() {
        return this.#express
    }
    get fs() {
        return this.#fs
    }

    get multer() {
        return this.#multer
    }

    get util() {
        return this.#util
    }

    get path() {
        return this.#path
    }
}

module.exports = ServiceRestUploading