"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortuneService = void 0;
//const { exec } = require("child_process");
class FortuneService {
    get(resp) {
        return {
            resp
        };
    }
}
exports.FortuneService = FortuneService;
(error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return {
            resp: error.message
        };
    }
    else if (stderr) {
        console.log(`stderr: ${stderr}`);
        return {
            resp: stderr
        };
    }
    else {
        console.log(`stdout: ${stdout}`);
        return {
            resp: stdout
        };
    }
};
;
